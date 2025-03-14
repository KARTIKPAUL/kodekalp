"use client";

import React, { useState } from "react";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { Testimonial } from "./testimonials/page";



const services = [
  {
    icon: "/images/s_6.png",
    title: "Customizable Patient Management",
    description:
      "Denteex provides a centralized system to manage and access patient information efficiently. Customizable fields allow you to adapt the system according to your clinic’s needs.",
  },
  {
    icon: "/images/s_1.png",
    title: "Appointment Scheduling",
    description:
      "Schedule, reschedule, and manage appointments easily. Denteex's intuitive interface allows patients to book their appointments online, improving your clinic's workflow and reducing administrative effort.",
  },
  {
    icon: "/images/s_5.png",
    title: "Automated Reminders",
    description:
      "Send automated reminders via email, SMS, or WhatsApp to patients. Reduce no-shows and improve appointment attendance with minimal effort.",
  },
  {
    icon: "/images/s_3.png",
    title: "Reports & Analytics",
    description:
      "Denteex offers detailed analytics on patient visits, appointment scheduling, and financial performance, helping you make data-driven decisions for growth and optimization.",

  },
  {
    icon: "/images/s_4.png",
    title: "Multi-Device Accessibility",
    description:
      "Denteex is cloud-based, ensuring you can manage your practice from any device—be it on your desktop at the clinic or mobile on the go.",
  },
  {
    icon: "/images/s_2.png",
    title: "Secure Data Storage",
    description:
      "We prioritize patient privacy with secure cloud storage, adhering to data protection regulations. Your patients' data is encrypted and safely stored.",
  },
];

export default function Home() {
  const [showScheduler, setShowScheduler] = useState(false);
  return (
    <div
      className="overflow-clip 
      inset-0 
      -z-10 h-full w-full bg-[#fafafa]
      bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
      bg-[size:14px_24px]"
    >
      {/* <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
                  xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
                  justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/denteex-logo.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        // </Link> 

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/home"} className="hover:text-blue-500">
              Home
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Blog
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              About
            </ScrollLink>


            <ScrollLink
              to="connect"
              smooth={true}
              className="hover:text-blue-500"
            >
              Connect
            </ScrollLink>




          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:1234567890" className="hidden lg:flex mx-4">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-6">
              +91 1234567890
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="
            py-3 
            px-6
            text-lg 
            hover:bg-[#abcbff]
            rounded-[6px]
            border-2
            border-black
            text-white
            bg-[#121212]
            transition
            duration-200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>  */}

      <main className=" min-h-screen">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14 md:pt-20 pt-5">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Where an idea turns into a project. Help your startups, business, and ideas to grow more and solve the problem with the power of code.
          </p>

          
          

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <div className="relative">
      {/* Link Component */}
      <button
        onClick={() => setShowScheduler(true)}
        className="
            py-3 
            px-6
            text-lg 
            hover:bg-[#abcbff]
            rounded-[6px]
            border-2
            border-black
            text-white
            bg-[#121212]
            transition
            duration-200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
        Book a call
      </button>

      {/* Popup Modal */}
      {showScheduler && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowScheduler(false)} // Close modal on background click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h2 className="text-lg font-bold mb-4">Schedule Your Demo</h2>
            <iframe
              src="https://calendly.com/kodekalp/get-connect-with-kodekalp"
              style={{ border: 0 }}
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
            <button
              onClick={() => setShowScheduler(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>

            <Link
              href="/demo-project"
              className="
              bg-white
              py-2 
              px-5
              md:text-xl
              border-4
            border-black
              rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Demo Project
            </Link>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Software Support
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Consultancy
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Certifications
              </p>
            </BoxReveal>
          </div>



          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            {/* <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
              Trusted by Dental Clinics for Streamlined Operations
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={50} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                    Clinics Supported
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={10000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                    Appointments Managed
                    </p>
                  </h1>
                </div>
              </div>
            </div> */}





            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/dr-sukla-logo.png",
                    name: "Logo",
                  },
                  {
                    logo: "/logo/Dr. Nakade Dental Clinic Logo (1).png",
                    name: "Logo",
                  },{
                    logo: "/logo/Choice Dental Clinic Logo.png",
                    name: "Logo",
                  },
                ]} 
              />
            </section>
          </div>
        </div>
      </main> 

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          All of our services are designed to help your dental practice stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Testimonial />

     


      {/*  
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>

          </div>

        </main>
      </Element>

      */}
      
      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/black-logo.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Denteex has been an invaluable addition to our practice at Choice Dental Care.
              Their software has streamlined our operations, improved patient engagement, 
              and made managing finances effortless. We couldn&apos;t be happier with the results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            {/* <span className="text-xl font-medium">
              Mr. Kartik Paul <br />
              Founder & CEO
            </span> */}
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* End Part */}
      <section className="expertise relative flex justify-center items-center mt-24 px-4 sm:px-8">
        <div className="relative bg-gradient-to-br from-[#2482d0] to-[#b822d3] max-w-6xl w-full rounded-tl-[40px] rounded-br-[40px] p-8 sm:p-16 flex flex-col sm:flex-row justify-between items-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-48 h-48 bg-white rounded-full -top-24 -left-24 animate-pulse"></div>
            <div className="absolute w-64 h-64 bg-white rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center sm:text-left space-y-6">
            <h1 className="text-transparent bg-gradient-to-r from-[#ffd86e] via-[#f89b29] to-[#ff6b6b] bg-clip-text text-4xl sm:text-5xl font-bold leading-tight animate-slide-up">
              Ready to Launch Your Next Big Idea?
              <br />
              <span className="text-white text-3xl sm:text-4xl font-semibold mt-2 block">
                Let's Elevate Your Business Together!
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-white/90 text-lg sm:text-xl font-medium">
                🚀 24-hour response time | ✅ Free consultation | 💡
                No-obligation quote
              </p>

              {/* Enhanced CTA Button */}
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffd86e] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <button className="relative bg-white text-[#2482d0] text-lg font-semibold rounded-full px-8 py-4 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <p
                    text="Schedule Free Consultation →"
                    className="hover:text-[#b822d3] transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="hidden sm:block relative z-10 ml-8">
            <div className="w-64 h-64 bg-gradient-to-tr from-[#ffd86e] to-[#ff6b6b] rounded-full animate-float"></div>
          </div>
        </div>
      </section>

     

     

    </div>
  );
}