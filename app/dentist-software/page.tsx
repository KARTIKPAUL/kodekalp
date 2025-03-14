import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";
import SchedulePopup from "@/components/scheduleopopup";

const features = [
{
  title: "Front Desk Management",
  description: "Simplify day-to-day operations with tools designed for effortless front-desk tasks:",
  details: [
    "Appointment scheduling and calendar management.",
    "Patient check-ins and real-time status updates.",
    "Automated appointment reminders and follow-ups."
  ]
},
{
  title: "Dental Record Keeping",
  description: "Keep all your patient data organized, secure, and easily accessible:",
  details: [
    "Comprehensive treatment records and history.",
    "Imaging integration for X-rays and scans.",
    "Customizable templates for treatment plans and notes."
  ]
},
{
  title: "Finance Management",
  description: "Track and manage your financial transactions effortlessly with Denteex:",
  details: [
    "Payment Balance Tracking: Record and monitor patient payments with ease.",
    "Outstanding Balances: Keep track of unpaid invoices to maintain financial clarity.",
    "Payment History: Access detailed records of past transactions for better financial oversight."
  ]
},
{
  title: "Patient Portal",
  description: "Empower your patients with a self-service portal for enhanced engagement:",
  details: [
    "Access to treatment history and dental records.",
    "Online appointment scheduling and payments.",
    "Secure communication with your practice."
  ]
}
];

const Showcase = () => {
return (
  <div
    className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

<header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Your Dental Practice with Comprehensive Software Solutions
              </h1>
              
          
              
            
        <p className="text-lg md:text-xl mx-auto my-5">
        At Denteex, we’ve crafted a robust and user-friendly dental software designed to streamline every aspect of your practice. Explore our powerful features that help you save time, improve efficiency, and provide exceptional care to your patients.
      </p>
            </div>
        </header>

    <div className="px-10 mb-10">
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
            <ul className="list-disc list-inside ml-5 mt-2">
              {feature.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold">Integrate Denteex with Your Practice Today</h2>
        <p className="mt-2">
          Denteex is designed to streamline your daily operations, increase efficiency, and provide a seamless experience for both your staff and patients. Empower your dental practice with advanced software features that simplify your workflow and improve patient satisfaction.
        </p>
      </div>
    </div>

    {/* Google Calendar Appointment Scheduling */}
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