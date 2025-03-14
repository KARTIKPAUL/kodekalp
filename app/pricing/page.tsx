import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const Showcase = () => {
  return (
    <div
      className="mt-3 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      

      <div className="px-4 py-8 mx-auto">
      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              We’re Here to Help!
              </h1>
              <p className="text-lg md:text-xl mx-auto my-5">
              At Denteex, we value your time and are committed to providing prompt and effective assistance. Whether you have questions about our software, need support, or want to learn more about how Denteex can transform your dental practice, our team is here for you.
              </p>
            </div>
        </header>

        <h3 className="text-xl font-semibold mt-6 mb-2">Our Pricing Model</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>One-Time Fee:</strong> A one-time investment for setting up the software and tailoring it to your clinic’s unique requirements. Includes installation, initial configuration, and staff training for a seamless onboarding experience.
          </li>
          <li>
            <strong>Annual Maintenance Contract (AMC):</strong> A yearly fee to ensure your software stays updated and optimized. Includes regular updates, technical support, and system maintenance to keep your practice running smoothly.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">What You Get:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Comprehensive Features: Full access to all core functionalities, from front desk management to patient portals.</li>
          <li>Customizable Add-Ons: Enhance your subscription with optional services like digital marketing and WhatsApp automation.</li>
          <li>Dedicated Support: Enjoy 24/7 expert assistance, ensuring uninterrupted operations.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Why Choose Our Pricing Model?</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Cost-Effective: Pay only once for setup and a minimal yearly fee for maintenance.</li>
          <li>Transparency: No hidden charges or surprise fees.</li>
          <li>Future-Ready: Stay ahead with regular software updates and ongoing support.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">How to Get Started</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Book a Demo: Experience Denteex in action and see how it can transform your clinic.</li>
          <li>Customized Plan: We’ll work with you to design a pricing plan tailored to your practice’s needs.</li>
          <li>Effortless Onboarding: Our team will handle the setup and provide training to your staff.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Ready to Elevate Your Dental Practice?</h2>
        <p>Contact us today to schedule your demo and learn more about our one-time fee and annual maintenance charges. Denteex is committed to providing the best value for your investment.</p>
      </div>
    </div>
  );
};

export default Showcase;