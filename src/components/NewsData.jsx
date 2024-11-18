"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function NewsData({data}) {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

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

    useOutsideClick(ref, () => setActive(null));

    return (<>
        <AnimatePresence>
            {active && typeof active === "object" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10" />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <div className="fixed inset-0  grid place-items-center z-[100]">
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
                        className="flex absolute bottom-2 right-2 lg:hidden items-center justify-center bg-gray-700 rounded-xl h-14 w-[96vw] text-white z-40"
                        onClick={() => setActive(null)}>
                        CLOSE
                    </motion.button>
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                        <motion.div layoutId={`image-${active.title}-${id}`}>
                            <Image
                                priority
                                width={200}
                                height={200}
                                src={active.src}
                                alt={active.title}
                                className="w-full h-70 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
                        </motion.div>

                        <div>
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
                            <div className="pt-4 relative px-4 pb-16">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-sm md:text-sm lg:text-base h-[34vh] md:h-fit px-3 pb-3 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] leading-relaxed"
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
        <ul className="max-w-7xl w-full gap-4 flex flex-col md:flex-row md:flex-wrap md:items-center justify-center">
            {data.map((card, index) => (
                <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    key={`card-${card.title}-${id}`}
                    onClick={() => setActive(card)}
                    className="px-4 py-2 md:p-4 flex md:flex-col flex-row justify-between items-center hover:drop-shadow-2xl rounded-xl cursor-pointer">
                    <div className="flex md:hidden gap-4 md:flex-col flex-row px-2 overflow-x-hidden">
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <Image
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="md:h-40 md:w-40 aspect-square h-14 w-14 rounded-lg object-cover object-top" />
                        </motion.div>
                        <div className="">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 md:text-center text-left text-xl">
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 md:text-center text-left">
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                    <div className="md:flex hidden gap-4 md:flex-col flex-row relative w-40 h-40 overflow-hidden">
                        <motion.div layoutId={`image-${card.title}-${id}`} className="absolute">
                            <Image
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="w-40 h-40 aspect-square object-cover rounded-lg" />
                        </motion.div>
                        <div className="absolute h-full rounded-lg top-0 inset-x-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent z-10 pointer-events-none" />
                        <div className="z-10 relative h-full flex flex-col gap-3 py-2 px-3">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="text-neutral-50 text-left text-lg">
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-200 text-left text-sm">
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </ul>
    </>);
}

