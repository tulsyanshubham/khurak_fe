"use client";;
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { revealOptions } from "@/constants/scrollRevealOptions";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  ref
}) => (
  <div
    ref={ref}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col justify-end gap-2 py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 spread">
        {card.title}
      </div>
      <div
        className="text-sm md:text-base font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 cursive text-justify">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  const itemRefs = useRef([])
  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default
      itemRefs.current.forEach((itemRef) => {
        if (itemRef) {
          sr(revealOptions).reveal(itemRef, { origin: "bottom" });
        }
      });
    }
    animate()
  }, [])

  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          ref={(el) => (itemRefs.current[index] = el)}
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>)
  );
}
