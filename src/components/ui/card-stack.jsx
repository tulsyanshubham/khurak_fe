"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactInfo } from "@/constants/footer_data";
import { cn } from "@/lib/utils";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-72 w-72 md:h-56 sm:w-96">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.heading}
            className={cn(`absolute dark:bg-black bg-white h-72 w-72 md:h-56 sm:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between ${styleData[index].gradiantClass}`)}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-xl text-green-700 dark:text-neutral-200">
                {card.heading}
              </div>
              <div className="font-normal text-lg text-neutral-700 dark:text-neutral-200">
                {card.description}
              </div>

            </div>
            <div>
              <Link href={card.link} target="_blank" className="bg-black/20 border-2 border-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 inline-block mt-2">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>
                    Visit
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
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </Link>
            </div>
          </motion.div>)
        );
      })}
    </div>
  )
};

const styleData = [
  {
      gradiantClass: "bg-gradient-to-br from-orange-200 to-pink-300 dark:from-orange-600 dark:to-pink-800",
  },
  {
      gradiantClass: "bg-gradient-to-br from-teal-200 to-blue-300 dark:from-teal-600 dark:to-blue-800",
  },
  {
      gradiantClass: "bg-gradient-to-br from-rose-300 to-red-400 dark:from-rose-700 dark:to-red-800",
  },
  {
      gradiantClass: "bg-gradient-to-br from-cyan-200 to-sky-300 dark:from-cyan-600 dark:to-sky-800",
  },
  {
      gradiantClass: "bg-gradient-to-br from-yellow-200 to-red-300 dark:from-yellow-600 dark:to-red-800",
  },
  {
      gradiantClass: "bg-gradient-to-br from-purple-200 to-indigo-300 dark:from-purple-700 dark:to-indigo-800",
  },
];