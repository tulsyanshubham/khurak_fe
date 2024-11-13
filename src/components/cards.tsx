"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-screen h-full">
      <Carousel items={cards} />
    </div>
  );
}

interface contentProps {
  head: string;
  desc: string;
  img_src: string;
}

const DummyContent = ({ head, desc, img_src }: contentProps) => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {head}
          </span>{" "}
          {desc}
        </p>

        <Image
          src={img_src}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 w-full mx-auto aspect-video object-cover mt-5 rounded-lg"
        />
      </div>
    </>
  );
};

const data = [
  {
    category: "Healthy Eating",
    title: "Eat healthily with Khurak.",
    src: "/images/carousel/1.jpeg",
    content: (
      <DummyContent
        head="Eat healthily"
        desc="with Khurak, where we believe that healthy eating should be simple, delicious, and accessible to everyone. Our meals are carefully curated using fresh, wholesome ingredients to provide balanced nutrition without sacrificing taste. Whether you're looking to maintain a healthy lifestyle or embark on a new wellness journey, Khurak offers meals designed to fuel your body and satisfy your cravings. Experience the joy of eating well with Khurak today."
        img_src="/images/carousel/1.jpeg"
      />
    ),
  },
  {
    category: "Nutrition",
    title: "Boost your nutrition with AI-powered recommendations.",
    src: "/images/carousel/2.jpeg",
    content: (
      <DummyContent
        head="Boost your nutrition"
        desc="with AI-powered recommendations that are personalized to your unique dietary needs. Khurak's advanced AI analyzes your food preferences, lifestyle, and health goals to provide tailored meal suggestions that enhance your overall well-being. Whether you're looking to increase your intake of vitamins, improve your digestion, or optimize your energy levels, our AI-driven recommendations ensure you get the nutrients your body needs for a healthier, happier you."
        img_src="/images/carousel/2.jpeg"
      />
    ),
  },
  {
    category: "Healthy Products",
    title: "Introducing new healthy meal options on Khurak.",
    src: "/images/carousel/3.jpeg",
    content: (
      <DummyContent
        head="Introducing new healthy meal options"
        desc="on Khurak, specially crafted to meet the evolving dietary needs of our customers. Our latest range of meals focuses on plant-based ingredients, lean proteins, and complex carbohydrates, ensuring you get a balanced meal that's both satisfying and nutritious. From vibrant salads to hearty grain bowls, Khurak is committed to delivering meals that not only taste great but also promote long-term health and wellness."
        img_src="/images/carousel/3.jpeg"
      />
    ),
  },
  {
    category: "Meal Plans",
    title: "Customizable meal plans for a balanced lifestyle.",
    src: "/images/carousel/4.jpeg",
    content: (
      <DummyContent
        head="Customizable meal plans"
        desc="designed to support a balanced lifestyle. At Khurak, we understand that every individual has unique health goals and dietary preferences. That's why we offer fully customizable meal plans, allowing you to select the meals that align with your nutritional needs and personal tastes. Whether you're following a specific diet like keto, vegan, or low-carb, or just want to maintain a balanced approach to eating, Khurak makes it easy to stay on track with meals that are delicious and wholesome."
        img_src="/images/carousel/4.jpeg"
      />
    ),
  },
  {
    category: "App",
    title: "Khurak's app: Order your healthy meal on the go.",
    src: "/images/carousel/5.jpeg",
    content: (
      <DummyContent
        head="Khurak's app"
        desc="lets you order your healthy meal on the go with ease. Our app is designed to make your food ordering experience as convenient as possible, offering a seamless way to browse our menu, customize your order, and track delivery all in one place. Whether you're at home, at the office, or on the move, Khurak's app ensures that you always have access to nutritious meals wherever you are. Download today and make eating healthy part of your daily routine."
        img_src="/images/carousel/5.jpeg"
      />
    ),
  },
  {
    category: "Hiring",
    title: "Join the Khurak team: We're hiring software engineers.",
    src: "/images/carousel/6.jpeg",
    content: (
      <DummyContent
        head="Join the Khurak team"
        desc="as we're expanding and hiring software engineers who are passionate about technology and health. If you're eager to work in a fast-paced, innovative environment where your work will make a real impact, Khurak is the place for you. We're looking for talented engineers to help us build and scale our platform, improve user experience, and drive the future of healthy eating. Be part of our mission to make nutritious meals accessible to everyone and contribute to a healthier world."
        img_src="/images/carousel/6.jpeg"
      />
    ),
  },
  {
    category: "Customer Stories",
    title: "Hear from our happy customers at Khurak.",
    src: "/images/carousel/7.jpeg",
    content: (
      <DummyContent
        head="Hear from our happy customers"
        desc="who have experienced the benefits of eating healthy with Khurak. Our customers love the convenience, variety, and quality of our meals, and many have shared how Khurak has helped them reach their health goals. From busy professionals to fitness enthusiasts and families, our community of satisfied customers is growing every day. Read their stories and discover how Khurak has become an essential part of their wellness journey."
        img_src="/images/carousel/7.jpeg"
      />
    ),
  },
  {
    category: "Seasonal Offers",
    title: "Check out Khurak's special seasonal meal deals.",
    src: "/images/carousel/8.jpeg",
    content: (
      <DummyContent
        head="Special seasonal meal deals"
        desc="are available now at Khurak. Celebrate the flavors of the season with our limited-time offers, featuring fresh ingredients and festive dishes that are perfect for any occasion. Whether you're looking to indulge in comfort food or maintain your healthy eating habits, our seasonal deals provide great-tasting options at a discount. Don't miss out on these delicious and nutritious meals—order now before they're gone!"
        img_src="/images/carousel/8.jpeg"
      />
    ),
  },
  {
    category: "Sustainability",
    title: "Khurak's commitment to sustainable food sourcing.",
    src: "/images/carousel/9.jpeg",
    content: (
      <DummyContent
        head="Khurak's commitment to sustainability"
        desc="extends to every part of our business, from sourcing ingredients to packaging. We partner with local farmers and suppliers who prioritize sustainable practices, ensuring that the food you enjoy is both good for you and the planet. Our meals are designed to minimize environmental impact, with eco-friendly packaging and a focus on reducing food waste. Join us in making a positive difference with every meal you order."
        img_src="/images/carousel/9.jpeg"
      />
    ),
  },
  {
    category: "Recipes",
    title: "Discover healthy recipes with Khurak's guidance.",
    src: "/images/carousel/10.jpeg",
    content: (
      <DummyContent
        head="Discover healthy recipes"
        desc="with Khurak's expert guidance. Whether you're an experienced cook or just starting out in the kitchen, our recipes make it easy to prepare nutritious and delicious meals at home. Explore a variety of dishes that cater to different tastes and dietary preferences, and learn tips and tricks for making healthy eating enjoyable and sustainable. With Khurak, you'll never run out of ideas for meals that support your wellness goals."
        img_src="/images/carousel/10.jpeg"
      />
    ),
  },
];



