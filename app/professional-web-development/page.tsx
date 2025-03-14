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
    className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Build a Strong Online Presence with Denteex’s Custom Website Solutions
              </h1>

      <p className="text-lg md:text-xl mx-auto my-5">
        In today’s digital age, having a professional and functional website is essential for dental practices to attract and engage patients. At Denteex, we specialize in developing custom websites tailored to the unique needs of dental clinics. Our goal is to create a website that not only represents your practice but also drives patient engagement, appointment bookings, and growth.
      </p>
            </div>
        </header>

    <div className="px-10 mb-10">
      

      <h2 className="text-lg font-bold mt-8">Why Choose Denteex for Your Dental Website Development?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">1. Professionally Designed Websites</h3>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Mobile-Responsive: Optimized for all devices, ensuring a seamless experience for your patients.</li>
            <li>User-Friendly Design: Simple navigation that makes it easy for patients to find information and book appointments.</li>
            <li>Modern Aesthetics: Clean, attractive, and up-to-date designs that align with your practice’s brand.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">2. Custom Functionality</h3>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Appointment Scheduling: Allow patients to book appointments directly through your website.</li>
            <li>Patient Portal Integration: Secure access for patients to view their treatment history, bills, and more.</li>
            <li>Online Payment Options: Convenient and secure payment gateways for patient transactions.</li>
            <li>Content Management System (CMS): Easily update your website with new content, blog posts, and promotions.</li>
          </ul>
        </div>
 
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">3. SEO Optimized Websites</h3>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>On-Page SEO: From keyword optimization to meta tags, we ensure your website is search-engine friendly.</li>
            <li>Local SEO: We focus on local optimization to help your practice appear in local search results, such as &quot;dentist near me.&quot;</li>
            <li>Faster Load Times: A faster website ensures better user experience and higher search rankings.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h3 className="text-xl font-semibold">4. Website Security & Maintenance</h3>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>SSL Encryption: Secure your website with SSL certification to protect patient data.</li>
            <li>Regular Updates: We provide continuous maintenance and updates to keep your site performing optimally.</li>
            <li>Backup Solutions: Regular backups to ensure your data is protected in case of an emergency.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-lg font-bold mt-8">Our Website Development Process</h2>
      <ol className="list-decimal list-inside ml-5 mt-4">
        <li><strong>Consultation & Planning:</strong> We start by understanding your practice’s needs and objectives. Based on your requirements, we create a customized plan that includes design concepts, features, and functionality.</li>
        <li><strong>Design & Development:</strong> Our team creates a visually appealing and fully functional website, keeping your brand’s identity and goals in mind. We integrate all necessary features, such as appointment scheduling, patient portals, and SEO optimization.</li>
        <li><strong>Testing & Launch:</strong> Before launching, we thoroughly test your website to ensure it is error-free and functions smoothly. Once everything is finalized, we launch the website and monitor its performance.</li>
        <li><strong>Ongoing Support & Maintenance:</strong> We provide ongoing support, ensuring your website remains updated, secure, and functional, offering peace of mind as your dental practice grows.</li>
      </ol>

      <h2 className="text-lg font-bold mt-8">Additional Website Services</h2>
      <ul className="list-disc list-inside ml-5 mt-4">
        <li>Website Redesign: Give your existing website a fresh, modern look to improve patient engagement.</li>
        <li>E-Commerce Integration: Sell dental products or services directly from your website.</li>
        <li>Blog Setup & Management: Create a blog to educate patients and improve SEO rankings.</li>
        <li>Analytics & Reporting: Track website performance and patient behavior to optimize your online strategy.</li>
      </ul>

      <h2 className="text-lg font-bold mt-8">Get Started Today</h2>
      <p className="mt-2">Ready to transform your online presence? Let Denteex help you build a website that represents your practice and attracts more patients.</p>
    </div>

    {/* Calendly Inline Widget for Scheduling */}
    {/* <div className="mt-10">
      <h2 className="text-lg font-bold">Schedule a Consultation</h2>
      <div className="calendly-inline-widget" data-url="https://calendly.com/denteex-kkgt/denteex-website-development-consultation-clone?primary_color=000000" style={{ minWidth: '320px', height: '700px' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div> */}
  </div>
);
};

export default Showcase;