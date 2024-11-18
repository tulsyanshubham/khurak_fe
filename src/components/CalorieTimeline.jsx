"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { timelineData } from "@/constants/timeline";
import { useScroll, useTransform, motion } from "framer-motion";

export default function CalorieTimeline() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 relative pt-20 md:pt-0 mb-5"
      ref={containerRef}
    >
      <div className="absolute top-0 px-auto flex flex-col items-center justify-center w-full md:w-[96vw] overflow-hidden py-6 md:py-8">
        <span className="text-2xl font-semibold md:text-4xl">
          Calorie Consumption Guide
        </span>
        <span className="text-lg md:text-2xl text-green-700">
          A Step-by-Step Approach
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-0 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-400 dark:bg-neutral-600 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-green-500 dark:text-neutral-300 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-11 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div>
                <p className="text-neutral-500 dark:text-neutral-300 text-xl md:text-2xl mb-2">
                  {item.subTitle}
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg mb-8">
                  {item.content}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {item.images.map((image, index) => (
                    <Image
                      src={image}
                      key={index}
                      alt="startup template"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1.5px] md:w-[2px] bg-gradient-to-t from-green-500 via-green-700 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
