"use client";;
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";

export const LayoutGrid = ({
  cards,
  ref
}) => {
  // const ref = useRef(null);
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  // useEffect(() => {
  //   if (selected) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [selected]);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  // useOutsideClick(ref, () => {
  //   setLastSelected(selected);
  //   setSelected(null);
  // });

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    (<div
    ref={ref}
      className="w-full h-full px-8 py-5 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-2 relative">
      {cards.map((card, i) => (
        <motion.div key={i} className={cn(layout[card.id], "")}
          // ref={ref}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(card.className, "relative overflow-hidden border-black/30 border-2 rounded-lg", selected?.id === card.id
              ? "rounded-lg absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-30 flex justify-center items-center flex-wrap flex-col"
              : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full")}
            layoutId={`card-${card.id}`}>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black/70 dark:bg-black opacity-0 z-20 rounded-xl",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} />
    </div>)
  );
};

const ImageComponent = ({
  card
}) => {
  return (
    (<motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail" />)
  );
};

const SelectedCard = ({
  selected
}) => {
  return (
    (<div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-30">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-10">
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            {selected?.heading}
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            {selected?.description}
          </p>
          <Link href={selected.link} target="_blank" rel="noopener noreferrer" className="bg-black/20 border-2 border-gray-300 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
                Read More
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </Link>
        </div>
      </motion.div>
    </div>)
  );
};

const layout = {
  1: "md:col-span-2",
  2: "col-span-1",
  3: "col-span-1",
  4: "md:col-span-2",
}