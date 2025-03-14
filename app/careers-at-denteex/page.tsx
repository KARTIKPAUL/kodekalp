import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const Careers = () => {
  return (
    <div
      className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      
      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Careers At Denteex
              </h1>
              <p className="text-lg md:text-xl mx-auto my-5">
              At Denteex, we are transforming how dental clinics operate with cutting-edge technology and innovative solutions. If you are passionate about making a difference in the healthcare tech industry, we would love to have you on our team!
              </p>
            </div>
        </header>

      <div className="px-4 py-8 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Join Our Mission to Revolutionize Dental Practice Management!</h2>
        <p className="mb-6">
          
        </p>

        <h2 className="text-xl font-semibold mb-4">Why Work at Denteex?</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Innovative Environment:</strong> Be part of a forward-thinking team shaping the future of dental practice management.</li>
          <li><strong>Growth Opportunities:</strong> Grow your career with hands-on experience and skill development.</li>
          <li><strong>Inclusive Culture:</strong> Thrive in a collaborative, supportive, and inclusive workplace.</li>
          <li><strong>Impactful Work:</strong> Contribute to solutions that empower dentists and improve patient care.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Current Openings</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">1. Software Developer</h3>
          <p><strong>Location:</strong> Remote/On-Site</p>
          <h4 className="font-semibold">Responsibilities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Design and develop ERP modules for dental practices.</li>
            <li>Collaborate with cross-functional teams for seamless product integration.</li>
          </ul>
          <h4 className="font-semibold">Requirements:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Proficiency in Python, Java, or other programming languages.</li>
            <li>Experience in ERP or healthcare software is a plus.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">2. Digital Marketing Specialist</h3>
          <p><strong>Location:</strong> Remote/On-Site</p>
          <h4 className="font-semibold">Responsibilities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Manage SEO, PPC campaigns, and social media strategies.</li>
            <li>Drive lead generation campaigns for dental clinics.</li>
          </ul>
          <h4 className="font-semibold">Requirements:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Proven experience in digital marketing.</li>
            <li>Knowledge of dental or healthcare industry trends is a plus.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">3. Customer Support Executive</h3>
          <p><strong>Location:</strong> Remote/On-Site</p>
          <h4 className="font-semibold">Responsibilities:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Provide technical support and training to Denteex users.</li>
            <li>Resolve queries promptly to ensure high customer satisfaction.</li>
          </ul>
          <h4 className="font-semibold">Requirements:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Strong communication and problem-solving skills.</li>
            <li>Experience in customer support or a similar role.</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
        <p className="mb-4">Browse our current openings and submit your resume and a cover letter to <a href="mailto:hr@denteex.com" className="text-blue-500">hr@denteex.com</a>. Shortlisted candidates will be contacted for an interview.</p>

        <h2 className="text-xl font-semibold mb-4">Perks and Benefits</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Competitive salary packages.</li>
          <li>Flexible working hours and remote work options.</li>
          <li>Learning and development opportunities.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Grow With Us</h2>
        <p>At Denteex, your ideas and contributions will make a real impact. Join us in creating innovative solutions that transform the dental industry.</p>
      </div>
    </div>
  );
};

export default Careers;