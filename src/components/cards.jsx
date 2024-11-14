"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import data from "@/constants/cards_carousel.json";

export default function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-screen h-full">
      <Carousel items={cards} />
    </div>
  );
}