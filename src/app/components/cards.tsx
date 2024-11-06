"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-screen h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Khurak club is that you prioritize your health with Khurak.
              </span>{" "}
              Easily plan your meals, create nutritious grocery lists, and discover healthy eating tips. Want personalized meal recommendations? Khurak’s AI is here to guide you towards better food choices, capturing every dietary need and preference.
            </p>

            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Healthy Eating",
    title: "Eat healthily with Khurak.",
    src: "/images/carousel/1.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Nutrition",
    title: "Boost your nutrition with AI-powered recommendations.",
    src: "/images/carousel/2.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Healthy Products",
    title: "Introducing new healthy meal options on Khurak.",
    src: "/images/carousel/3.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Meal Plans",
    title: "Customizable meal plans for a balanced lifestyle.",
    src: "/images/carousel/4.jpeg",
    content: <DummyContent />,
  },
  {
    category: "App",
    title: "Khurak's app: Order your healthy meal on the go.",
    src: "/images/carousel/5.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Join the Khurak team: We're hiring software engineers.",
    src: "/images/carousel/6.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Customer Stories",
    title: "Hear from our happy customers at Khurak.",
    src: "/images/carousel/7.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Seasonal Offers",
    title: "Check out Khurak's special seasonal meal deals.",
    src: "/images/carousel/8.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Sustainability",
    title: "Khurak's commitment to sustainable food sourcing.",
    src: "/images/carousel/9.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Recipes",
    title: "Discover healthy recipes with Khurak's guidance.",
    src: "/images/carousel/10.jpeg",
    content: <DummyContent />,
  },
];


