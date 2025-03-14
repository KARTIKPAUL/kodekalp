import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const blogContent = {
title: "Insights for Modern Dental Practices",
welcomeMessage: "Welcome to the Denteex Blog, where we share valuable insights, tips, and updates on everything related to dental practice management, technology, and the latest trends in the dental industry. Our blog is designed to help dental professionals stay informed and enhance the success of their practice through expert advice, case studies, and software usage guides.",
categories: [
  {
    title: "Dental Practice Management",
    description: "Explore articles focused on improving the day-to-day operations of your dental clinic. From optimizing your front desk operations to managing patient appointments effectively, our tips help streamline your practice for maximum efficiency.",
    articles: [
      "Efficient Appointment Scheduling: Best practices to manage your appointments and reduce patient wait times.",
      "Staff Management: How to build a strong team and improve workflow in your clinic.",
      "Patient Retention Strategies: Techniques to build lasting relationships and keep patients coming back."
    ]
  },
  {
    title: "Dental Software & Technology",
    description: "Stay ahead of the curve with the latest advancements in dental technology and software. Our articles explore how digital solutions like Denteex can transform your practice management, improve patient experiences, and increase operational efficiency.",
    articles: [
      "Why You Need Dental Practice Management Software: The benefits of using a comprehensive solution for your clinic.",
      "How to Choose the Right Dental Software: Key features to look for when selecting a dental software for your practice.",
      "The Role of AI in Dentistry: Exploring the impact of artificial intelligence on modern dental practices."
    ]
  },
  {
    title: "Marketing & Patient Acquisition",
    description: "Grow your dental practice with proven marketing strategies. Whether you're just starting or looking to optimize your current efforts, we share actionable tips to attract more patients and build a strong online presence.",
    articles: [
      "How to Optimize Your Website for Local SEO: Simple steps to improve your clinic’s visibility in local search results.",
      "Social Media Marketing for Dentists: Strategies to build your online community and engage with patients.",
      "Creating a Lead Generation Funnel for Dental Clinics: Effective techniques to increase patient bookings and grow your practice."
    ]
  },
  {
    title: "Dental Industry Trends",
    description: "Stay updated on the latest trends and best practices in the dental industry. From patient care innovations to regulatory changes, our blog covers all the essential topics to keep your practice competitive and future-ready.",
    articles: [
      "The Future of Dentistry: Trends shaping the dental industry in the next decade.",
      "Telemedicine in Dentistry: How virtual consultations are changing the way patients access care.",
      "Sustainability in Dental Practices: Ways to reduce your clinic's carbon footprint and promote eco-friendly practices."
    ]
  }
]
};

const Showcase = () => {
return (
  <div
    className="mt-7 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

    <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {blogContent.title}
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto my-5">
              {blogContent.welcomeMessage}
              </p>
            </div>
    </header>

    <div className="px-10 mb-10">
      <p className="mb-6"></p>
      {blogContent.categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold">{category.title}</h2>
          <p className="mb-4">{category.description}</p>
          <ul className="list-disc list-inside">
            {category.articles.map((article, idx) => (
              <li key={idx}>{article}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
};

export default Showcase;