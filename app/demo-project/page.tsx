"use client";

import React from "react";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Image from "next/image";
import SchedulePopup from "@/components/scheduleopopup";


const Showcase = () => {
  return (
    <>
    <div className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <header className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Experience Denteex in Action – Book Your Demo Today!
          </h1>
          <p className="text-lg md:text-xl mx-auto my-5">
            Curious about how Denteex can transform your dental practice? See it for yourself with a personalized live demo. Our experts will guide you through the features, answer your questions, and show you how Denteex can simplify your clinic&apos;s operations.
          </p>
        </div>
      </header>

      <div className="mt-10">
      <h2 className="text-lg font-bold">Schedule Your Demo</h2>
      <iframe 
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29y0aKJzRSOr66ZR9kpPCFkvqxxDzF8GbZV8mFwjNzzI-FJj-vxZWAJPIoJqoJ7648oqzAtA68?gv=true" 
        style={{ border: 0 }} 
        width="100%" 
        height="600" 
        frameBorder="0">
      </iframe>
      </div>
      {/* <SchedulePopup showAfter={1500} /> */}
      
    </div>
    {/* <SchedulePopup showAfter={1000}/> */}
    </>
  );
};

export default Showcase;
