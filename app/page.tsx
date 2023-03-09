"use client";
import Image from "next/image";
import NavBar from "./navbar";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "/images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: "/images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "/images/desktop-image-hero-3.jpg",
  },
];

export default function Home() {
  const [slideIndx, setSlideIndx] = useState(1);
  const curSlide = slides[slideIndx];
  const nextSlide = () => {
    if (slideIndx === slides.length - 1) {
      setSlideIndx(0);
    } else {
      setSlideIndx(slideIndx + 1);
    }
  };
  const prevSlide = () => {
    if (slideIndx === 0) {
      setSlideIndx(slides.length - 1);
    } else {
      setSlideIndx(slideIndx - 1);
    }
  };
  return (
    <main className="min-h-screen mx-auto text-white max-w-7xl font-spartan">
      <section className="flex flex-col md:flex-row md:h-[400px] ">
        <div className="relative md:w-3/5 h-[400px] md:h-full  ">
          <Image
            src={curSlide.img}
            alt="hero"
            fill
            className="absolute inset-0 object-cover -z-10"
          />
          <NavBar />
        </div>
        <div className="relative text-black px-16 md:w-2/5 h-[400px] pt-20 md:h-full bg-white">
          <h1 className="max-w-xs mb-8 text-3xl font-bold ">
            {curSlide.title}
          </h1>
          <p className="mb-8 text-sm font-light text-DarkGray">
            {curSlide.desc}
          </p>
          <button className="flex items-center justify-center gap-4 transition-['colors','opacity'] group hover:text-gray-600 ">
            <span className="text-sm font-bold tracking-[.75em] uppercase">
              Shop Now
            </span>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:fill-gray-600"
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <Controllers next={nextSlide} prev={prevSlide} />
        </div>
      </section>
      <section className="flex flex-col md:flex-row ">
        <div className="relative md:w-[30%] h-[400px] md:h-[200px]  ">
          <Image
            src={"/images/image-about-dark.jpg"}
            alt="hero-1"
            fill
            className="absolute inset-0 -z-10"
          />
        </div>
        <div className="relative text-black px-16 md:w-[40%]  md:h-[200px] pt-8  bg-white">
          <h1 className="mb-6 text-sm text-Black font-bold tracking-[.5em] ">
            ABOUT OUR FURNITURE
          </h1>
          <p className="mb-8 text-sm font-light text-DarkGray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        </div>
        <div className="relative md:w-[30%] h-[400px] md:h-[200px] ">
          <Image
            src={"/images/image-about-light.jpg"}
            alt="hero-1"
            fill
            className="absolute inset-0 -z-10"
          />
        </div>
      </section>
    </main>
  );
}

type ControllersProps = {
  next: () => void;
  prev: () => void;
};
const Controllers = ({ next, prev }: ControllersProps) => {
  return (
    <div className="absolute right-0 flex items-center justify-between  -top-14 md:top-[calc(100%-3.5rem)] md:right-[calc(100%-8rem)] ">
      <button
        onClick={prev}
        className="flex items-center justify-center w-16 transition-opacity bg-black hover:bg-opacity-75 h-14"
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="flex items-center justify-center w-16 transition-opacity bg-black hover:bg-opacity-75 h-14"
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
