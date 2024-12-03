"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avater";
import { assets } from "@/constants/assets";
import { revealOptions } from "@/constants/scrollRevealOptions";

export default function BlogData({ data, page }) {
    const [active, setActive] = useState(null);
    const [pageName, setPageName] = useState(page);
    const ref = useRef(null);
    const id = useId();
    const itemRefs = useRef([]);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useEffect(() => {
        async function animate() {
            const sr = (await import("scrollreveal")).default;

            itemRefs.current.forEach((itemRef) => {
                if (itemRef) {
                    sr(revealOptions).reveal(itemRef, { origin: "bottom" });
                }
            });
        }
        animate();
    }, []);

    useEffect(() => {
        setPageName(page);
    }, [page]);

    useOutsideClick(ref, () => setActive(null));

    const spanArr = [1, 4, 6, 9, 12, 15, 17, 20, 23, 26, 28, 30];

    return (<>
        <AnimatePresence>
            {active && typeof active === "object" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full !z-20" />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <div className="fixed inset-0 grid place-items-center z-[100]">
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="relative w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden pb-6">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex md:hidden absolute bottom-3 right-2 lg:hidden items-center justify-center bg-gray-700 rounded-xl h-14 w-[96%] text-white z-40"
                            onClick={() => setActive(null)}>
                            <span className="text-lg">CLOSE</span>
                        </motion.button>
                        <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                            <Image
                                priority
                                width={200}
                                height={200}
                                src={active.src}
                                alt={active.title}
                                className="w-full h-72 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center" />
                        </motion.div>

                        <div className="relative overflow-y-auto">
                            <div className="flex justify-between items-start p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 text-base">
                                        {active.description}
                                    </motion.p>
                                </div>

                                <motion.a
                                    layoutId={`button-${active.title}-${id}`}
                                    href={active.ctaLink}
                                    target="_blank"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                                    View
                                </motion.a>
                            </div>
                            <div className="relative px-4 py-4">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-sm md:text-sm lg:text-base h-[34vh] md:h-fit px-3 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] leading-relaxed"
                                >
                                    {typeof active.content === "function"
                                        ? active.content()
                                        : active.content}
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
        {pageName === "home" && (
            <ul className="max-w-7xl w-full gap-4 flex flex-col md:flex-row md:flex-wrap md:gap-2 lg:gap-16 2xl:gap-20 md:items-center justify-center">
                {data.slice(0, 3).map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className="px-4 py-2 md:p-4 flex md:flex-col flex-row justify-between items-center hover:drop-shadow-2xl rounded-xl cursor-pointer">
                        <div className="flex md:hidden gap-4 md:flex-col flex-row px-2 opacity-100">
                            <motion.div layoutId={`image-${card.title}-${id}`} className="!opacity-100">
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="md:h-40 md:w-40 aspect-square h-14 w-14 rounded-lg object-cover object-top" />
                            </motion.div>
                            <div className="!opacity-100">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 md:text-center text-left text-xl !opacity-100">
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 md:text-center text-left !opacity-100">
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <div className="md:block hidden max-w-xs w-64 group/card">
                            <div
                                className={cn(
                                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4", `bg-cover`
                                )}
                                style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${card.src})` }}
                            >
                                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                                <div className="flex flex-row items-center space-x-4 z-10">
                                    {/* <Image
                                        height="100"
                                        width="100"
                                        alt="Avatar"
                                        src={card.avatar}
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    /> */}
                                    <Avatar
                                        className="h-10 w-10 rounded-full border-2 object-cover"
                                    >
                                        {card.avatar && (<AvatarImage src={assets.avater} />)}
                                        <AvatarFallback className="text-lg font-bold">{card.name[0]}</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col">
                                        <p className="font-normal text-base text-gray-50 relative z-10">
                                            {card.name}
                                        </p>
                                        {/* <p className="text-sm text-gray-400">2 min read</p> */}
                                    </div>
                                </div>
                                <div className="text content">
                                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                        {card.title}
                                    </h1>
                                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        )}
        {pageName === "blogs" && (
            <div>
                <div
                    className={cn(
                        "hidden md:grid max-w-7xl mx-auto md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-2",
                    )}>
                    {data.map((card, i) => (
                        <motion.div
                            className={
                                `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer !pointer-events-auto !z-10 !opacity-100 ${spanArr.includes(i) ? "md:col-span-2" : ""}`
                            }
                            layoutId={`card-${card.title}-${id}`}
                            key={`card-${card.title}-${id}`}
                            onClick={() => {
                                console.log(card.title)
                                setActive(card)
                            }}
                        >
                            <Image
                                src={card.src}
                                alt={card.title}
                                width={400}
                                height={400}
                                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
                            />
                            <div className="group-hover/bento:translate-x-2 transition duration-200">
                                <div className="flex items-center justify-start gap-2">
                                    {/* <Image
                                        height="100"
                                        width="100"
                                        alt="Avatar"
                                        src={card.avatar}
                                        className="h-7 w-7 rounded-full border-2 object-cover"
                                    /> */}
                                    <Avatar
                                        className="h-7 w-7 rounded-full border-2 object-cover"
                                    >
                                        {card.avatar && (<AvatarImage src={assets.avater} />)}
                                        <AvatarFallback className="text-lg font-bold">{card.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span
                                        className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                                        {card.name}
                                    </span>
                                </div>
                                <div
                                    className="font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                                    {card.title}
                                </div>
                                <div
                                    className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                                    {card.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex md:hidden max-w-7xl w-full gap-4 flex-col justify-center">
                    {data.map((card, index) => (
                        <motion.div
                            ref={(el) => (itemRefs.current[index] = el)}
                            layoutId={`card-${card.title}-${id}`}
                            key={`card-${card.title}-${id}`}
                            onClick={() => setActive(card)}
                            className="px-4 py-2 md:p-4 flex md:flex-col flex-row justify-between items-center hover:drop-shadow-2xl rounded-xl cursor-pointer">
                            <div className="flex gap-4 md:flex-col flex-row px-2 opacity-100">
                                <motion.div layoutId={`image-${card.title}-${id}`} className="!opacity-100">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={card.src}
                                        alt={card.title}
                                        className="md:h-40 md:w-40 aspect-square h-14 w-14 rounded-lg object-cover object-top" />
                                </motion.div>
                                <div className="!opacity-100">
                                    <motion.h3
                                        layoutId={`title-${card.title}-${id}`}
                                        className="font-medium text-neutral-800 dark:text-neutral-200 md:text-center text-left text-xl !opacity-100">
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${card.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400 md:text-center text-left !opacity-100">
                                        {card.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ div>
        )}
    </>);
}

