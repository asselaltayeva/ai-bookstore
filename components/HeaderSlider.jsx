import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Understand Modern Deep Learning, From Basics to Transformers.",
      offer: "New arrival · Understanding Deep Learning",
      buttonText1: "Buy now",
      buttonText2: "View details",
      imgSrc1: assets.python_with_python,
      imgSrc2: assets.understanding_deep_learning,
    },
    {
      id: 2,
      title: "Turn Ideas into AI Products with Practical Engineering Patterns.",
      offer: "Bestseller · AI Engineering",
      buttonText1: "Buy now",
      buttonText2: "Browse AI books",
      imgSrc1: assets.ai_engineering,
      imgSrc2: assets.becoming_a_data_head,
    },
    {
      id: 3,
      title: "Learn Machine Learning End‑to‑End with Hands‑On Projects.",
      offer: "Reader favorite · Hands‑On Machine Learning",
      buttonText1: "Buy now",
      buttonText2: "See all ML books",
      imgSrc1: assets.hands_on_machine_learning,
      imgSrc2: assets.python_data_science,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#F4F4FB] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >

            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-sm text-indigo-700 font-medium pb-1">
                {slide.offer}
              </p>
              <h1 className="max-w-xl md:text-[36px] md:leading-[44px] text-3xl font-medium text-zinc-900">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 gap-3">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-zinc-900 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-zinc-800">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center flex-1 justify-end pr-6 md:pr-10 gap-10">
              <div className="relative md:w-48 md:h-64 w-32 h-44">
                <Image
                  src={slide.imgSrc1}
                  alt={`Slide ${index + 1} main`}
                  fill
                  className="object-cover drop-shadow-lg rounded-md"
                />
              </div>
              <div className="relative md:w-48 md:h-64 w-32 h-44 hidden sm:block">
                <Image
                  src={slide.imgSrc2}
                  alt={`Slide ${index + 1} secondary`}
                  fill
                  className="object-cover drop-shadow-lg rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer border border-zinc-400 ${
              currentSlide === index ? "bg-zinc-900" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
