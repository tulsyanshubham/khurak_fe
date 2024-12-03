"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Avatar, AvatarFallback } from "./avater";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto max-w-7xl w-[98%] overflow-hidden py-0 md:py-5 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[170px] max-w-full relative rounded-2xl flex-shrink-0 md:w-[300px]"
            key={`${item.title}${idx}`}
          >
            <div className="bg-gray-100 h-full dark:bg-gray-900 dark:text-white p-4 md:p-6 rounded-2xl flex flex-col gap-2 md:gap-4 relative justify-between">
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="font-bold text-sm md:text-lg">{item.title}</div>
                <div>
                  <span className="flex items-center justify-center gap-2">
                    <span className="flex">
                      {Array.from({ length: Math.floor(item.stars) }, (_, index) => (
                        <FaStar className="w-4 md:w-5" key={index} color="orange" />
                      ))}
                      {item.stars % 1 >= 0.5 && (
                        <FaStarHalf className="w-4 md:w-5" color="orange" />
                      )}
                    </span>
                    <span className="text-sm md:text-base">
                    {`${item.stars} / 5`}
                    </span>
                  </span>
                </div>
                <div className="text-xs md:text-sm">{item.content}</div>
              </div>
              <div className="flex items-center gap-2">
                  <Avatar className="h-7 md:h-10 w-7 md:w-10 rounded-full border-2 object-cover" >
                    <AvatarFallback className="text-md md:text-lg font-bold">{item.reviewer[0]}</AvatarFallback>
                  </Avatar>
                <div className="text-xs md:text-md">{item.reviewer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
