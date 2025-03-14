'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from "../../assets/data/data";
import Image from "next/image";
import { FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  post: string;
  place: string;
  desc: string;
  rating?: number;
  projectLink?: string;
}

interface StarRatingProps {
  rating: number;
}

interface TestimonialCardProps {
  item: TestimonialItem;
}

const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
    {[...Array(5)].map((_, i) => (
      <FiStar key={i} className={i < rating ? "fill-current" : ""} />
    ))}
  </div>
);

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="px-4 group h-full">
      <div className="bg-gray-900/80 p-8 rounded-2xl shadow-2xl hover:bg-gray-800/90 transition-all duration-500 ease-out transform group-hover:scale-[1.02] backdrop-blur-sm border border-white/10 h-full flex flex-col">
        <div className="flex flex-col items-center flex-grow">
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[2px] bg-gray-900 rounded-full" />
            </div>
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="relative rounded-full z-10 object-cover hover:rotate-3 transition-transform duration-500"
            />
          </div>

          <StarRating rating={item.rating || 5} />

          <div className="flex-1 w-full">
            <blockquote className="relative text-lg text-gray-300 mb-4 leading-relaxed">
              <span className="absolute -left-4 -top-4 text-4xl text-pink-400">“</span>
              <div className={`transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                {item.desc}
              </div>
              <span className="absolute -right-4 -bottom-4 text-4xl text-blue-400">”</span>
            </blockquote>

            {item.desc.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center justify-center gap-1 mx-auto"
              >
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <FiChevronUp className="inline" />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <FiChevronDown className="inline" />
                  </>
                )}
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              {item.name}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{item.post}</p>
            <p className="text-sm text-gray-500 mt-1">{item.place}</p>
          </div>
        </div>

        {item.projectLink && (
          <div className="mt-6 flex justify-center items-center transform transition-all duration-300 hover:-translate-y-1">
            <a
              href={`https://${item.projectLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 shadow-lg hover:shadow-xl w-full text-center py-2 px-4 rounded-lg"
            >
              View Project
              <span className="ml-2">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          centerMode: false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false
        },
      },
    ],
  };

  return (
    <div className="relative py-20 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="animate-pulse-slow w-full h-full bg-gradient-conic from-transparent via-pink-500/30 to-transparent" />
      </div>

      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 px-4">
        <span className="animate-text bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Client Success Stories
        </span>
      </h2>

      <div className="relative w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
        <Slider {...settings}>
          {testimonial.map((item: TestimonialItem) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}