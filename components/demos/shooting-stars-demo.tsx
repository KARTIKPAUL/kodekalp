import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Front Desk Management",
    description:
      "Denteex simplifies every front-desk task, from appointment scheduling to patient check-ins, creating a smooth and efficient experience for your team and patients.",
  },
  {
    icon: "/icons/design.svg",
    title: "Dental Record Keeping",
    description:
      "Keep all patient records, treatment notes, and imaging safely stored and easily accessible with Denteex's HIPAA-compliant system.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Finance and Billing",
    description: "Manage payments, track invoices, and handle insurance claims effortlessly, ensuring a clear and transparent financial process.",
  },
  {
    icon: "/icons/team.svg",
    title: "Patient Portal",
    description: "Empower your patients with a self-service portal for accessing their records, scheduling appointments, and making payments online.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Digital Marketing",
    description: "Denteex helps you attract more patients through local SEO, Google My Business optimization, and engaging social media campaigns.",
  },

  {
    icon: "/icons/safe.svg",
    title: "Secure Building",
    description:
      "With top-tier protection, Denteex ensures your data and operations are safeguarded against threats, so you can focus on patient care.",
  },
  

  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Websites",
    description: "Denteex offers tailored website solutions that are mobile-friendly, easy to manage, and designed to enhance your practice's online image.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "Our dedicated team is available round the clock to ensure your practice runs smoothly without interruptions.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Get advanced features and exceptional service without breaking the bank, making Denteex the best choice for your dental practice.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
       Why Us?
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
        Denteex was founded with the vision of transforming dental practice management. Learn about our mission, the values driving our company, and the dedicated team behind Denteex.

        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
