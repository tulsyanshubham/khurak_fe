"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

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
        "scroller relative z-20  max-w-7xl overflow-hidden ",
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
            className="w-[170px] max-w-full relative rounded-2xl flex-shrink-0 md:w-[450px]"
            key={`${item.title}${idx}`}
          >
            <div className="bg-gray-100 h-full dark:bg-gray-700 dark:text-white p-4 md:p-8 rounded-2xl flex flex-col gap-3 md:gap-6 relative justify-between">
              <div className="font-bold text-sm md:text-lg">{item.title}</div>
              <div className="text-xs md:text-base">{item.content}</div>
              <div className="flex items-center gap-2">
                <div
                  className="h-6 w-6 md:h-12 md:w-12 rounded-full"
                  style={{ backgroundColor: item.avatarColor }}
                ></div>
                <div className="text-sm">{item.reviewer}</div>
              </div>
            </div>
            <div className="absolute right-4 bottom-5 flex flex-row text-sm gap-1 font-bold">
              <span>{item.stars}</span>
              <FaStar size={17} color="orange" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
