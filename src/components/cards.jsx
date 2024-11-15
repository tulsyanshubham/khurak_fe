"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { carouselData } from "@/constants/cards_carousel";

export default function CardsCarousel() {
  const cards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}