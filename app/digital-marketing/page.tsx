import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";
import SchedulePopup from "@/components/scheduleopopup";

const Showcase = () => {
return (
  <div
    className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

<header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Elevate Your Dental Practice with Strategic Digital Marketing
              </h1>

              <p className="text-lg md:text-xl mx-auto my-5">
              In today’s competitive healthcare landscape, having a strong online presence is essential for attracting and retaining patients. At Denteex, we specialize in delivering tailored digital marketing solutions designed specifically for dental clinics. Our goal is to help you grow your practice, increase patient engagement, and achieve sustainable success.
      </p>
            </div>
        </header>

    <div className="px-10 mb-10">
      

      <h2 className="text-lg font-bold mt-8">Our Core Digital Marketing Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">1. Search Engine Optimization (SEO)</h3>
          <p className="mt-2">Boost your online presence and attract local patients with effective SEO techniques.</p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Local SEO: Optimize your Google My Business profile to rank higher in local searches.</li>
            <li>On-Page & Off-Page SEO: Improve website structure and authority to enhance search visibility.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">2. Pay-Per-Click (PPC) Advertising</h3>
          <p className="mt-2">Generate immediate leads and increase footfall with targeted PPC ads across Google and social media platforms.</p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Google Ads & Social Media Ads: Attract patients searching for dental services.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">3. Social Media Management</h3>
          <p className="mt-2">Enhance patient engagement and build trust through consistent, creative content on social media.</p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Platform Engagement: Regular posts, comments, and patient interaction.</li>
            <li>Campaigns: Highlight services, promotions, and patient testimonials.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">4. Lead Generation for Appointments</h3>
          <p className="mt-2">Drive more appointments and increase foot traffic with lead generation strategies.</p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Targeted Ads & Landing Pages: Run tailored ad campaigns to capture leads and drive bookings.</li>
            <li>WhatsApp & Email Automation: Use WhatsApp for appointment booking and automated reminders.</li>
          </ul>
        </div>

        {/* <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">5. Content Marketing</h3>
          <p className="mt-2">Engage and educate potential patients with valuable content that improves your online visibility.</p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Blogs & Videos: Share dental tips, success stories, and educational content.</li>
            <li>Infographics: Visually showcase dental procedures and tips.</li>
          </ul>
        </div> */}
      </div>

      <h2 className="text-lg font-bold mt-8">Why Choose Denteex for Digital Marketing?</h2>
      <ul className="list-disc list-inside ml-5 mt-4">
        <li>Industry Expertise: In-depth understanding of the dental industry’s needs and challenges.</li>
        <li>Tailored Strategies: Customized solutions that align with your goals and patient demographics.</li>
        <li>Results-Driven: Focused on measurable outcomes like increased appointments and patient retention.</li>
        <li>Comprehensive Services: From strategy to execution, we offer end-to-end support for your practice.</li>
      </ul>

      <h2 className="text-lg font-bold mt-8">Start Growing Your Practice Today</h2>
      <p className="mt-2">Let Denteex help you attract more patients, boost appointment bookings, and enhance your digital presence.</p>
    </div>

    {/* Calendly Inline Widget for Scheduling */}
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

    <SchedulePopup showAfter={1000}/>
  </div>
);
};

export default Showcase;