import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const FAQ = () => {
  return (
    <div
      className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      
      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Frequently Asked Questions (FAQ) – Denteex Dental Software
              </h1>
              
          <p className="text-lg md:text-xl mx-auto my-5">
          Welcome to the Denteex FAQ page! Here, we’ve compiled the most common questions our users have about our dental software, features, and services. If you don’t find an answer to your question here, feel free to contact our support team for further assistance.
        </p>
            </div>
        </header>

      <div className="px-4 py-8 mx-auto">
        

        <div className="mb-6">
          <h2 className="text-xl font-semibold">1. What is Denteex?</h2>
          <p>Denteex is a comprehensive dental practice management software designed to streamline and automate various aspects of a dental clinic. From appointment scheduling to patient record keeping, billing, and patient engagement, Denteex offers a range of features to improve clinic efficiency, enhance patient care, and drive business growth.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">2. How does Denteex help my dental practice?</h2>
          <p>Denteex helps dental practices by automating routine tasks, organizing patient data, improving communication with patients, and simplifying billing and payment processes. With features like appointment management, dental record keeping, finance tracking, and a patient portal, Denteex allows you to focus more on patient care while reducing administrative workload.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">3. Can Denteex be customized to fit my practice&apos;s needs?</h2>
          <p>Yes! Denteex is fully customizable to suit the specific needs of your practice. Whether you&apos;re a solo practitioner or part of a multi-location dental group, our software can be tailored to meet your workflow and operational requirements.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">4. Is Denteex easy to use?</h2>
          <p>Yes, Denteex is designed with ease of use in mind. Our user-friendly interface ensures that both dental staff and administrators can quickly learn how to navigate the software. We also offer training and support to help your team get up to speed.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">5. Does Denteex provide a mobile app for on-the-go access?</h2>
          <p>Yes, Denteex offers a mobile app that allows dental professionals to access patient records, manage appointments, and monitor clinic performance from anywhere. The mobile app ensures that your team stays connected and efficient even when they’re away from the office.</p>
        </div>

        

        <div className="mb-6">
          <h2 className="text-xl font-semibold">6. Can Denteex integrate with other dental tools and software?</h2>
          <p>Yes, Denteex offers integrations with various third-party dental tools and software, including imaging systems, insurance providers, and accounting software. This seamless integration allows you to connect all the tools your practice uses into one unified system.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">7. What features are included in Denteex software?</h2>
          <p>Denteex includes a wide range of features to support the daily operations of a dental clinic, including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Appointment Scheduling and Reminders</li>
            <li>Patient Record Management</li>
            <li>Reporting and Analytics</li>
            <li>Finance Management</li>
            <li>Customizable Dashboard</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">8. Do you offer training and support for Denteex?</h2>
          <p>Yes! We provide comprehensive onboarding, training, and ongoing support to ensure you get the most out of Denteex. Our team is available for live chat, phone support, and email assistance whenever you need help.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">9. How much does Denteex cost?</h2>
          <p>Denteex offers a one-time fee for the software, along with an annual maintenance charge (AMC) for ongoing support and updates. The exact pricing is based on the size and specific requirements of your practice. For a personalized quote, please request a demo.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">10. Can I schedule a demo before purchasing Denteex?</h2>
          <p>Yes! We encourage you to schedule a live demo to see how Denteex can work for your practice. Our team will walk you through the software, demonstrate key features, and answer any questions you may have.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">11. Can Denteex help me with digital marketing for my clinic?</h2>
          <p>Yes! Denteex offers add-on services such as Digital Marketing for dental practices, including lead generation campaigns, social media management, GMB optimization, and more. These services are designed to help you attract more patients and grow your practice online.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">12. Is Denteex available in multiple languages?</h2>
          <p>Currently, Denteex is available in English. We are working on adding more languages in the future to support our global user base.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">13. How do I contact customer support?</h2>
          <p>You can contact our customer support team via:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Email: <a href="mailto:support@denteex.com" className="text-blue-500">support@denteex.com</a></li>
            <li>Phone: +91-6362720677</li>
            <li>Live Chat: Available on our website during business hours</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">14. How do I get started with Denteex?</h2>
          <p>Getting started is easy! Simply request a demo to see how Denteex can benefit your practice. After the demo, our team will guide you through the onboarding process to ensure a smooth implementation.</p>
        </div>

        <p>If you have any other questions or need further assistance, feel free to contact us. We’re here to help!</p>
      </div>
    </div>
  );
};

export default FAQ;