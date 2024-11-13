"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import fdata from "@/constants/cards_carousel.json";

export default function CardsCarousel() {
  const cards = fdata.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-screen h-full">
      <Carousel items={cards} />
    </div>
  );
}