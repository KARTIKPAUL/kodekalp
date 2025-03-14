import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const caseStudies = [
{
  title: "Bright Smiles Dental Clinic: Boosting Appointment Bookings with Denteex",
  challenge: "Bright Smiles Dental Clinic struggled with managing patient appointments efficiently, leading to missed appointments, double bookings, and long patient wait times.",
  solution: "By implementing Denteex’s appointment scheduling and reminder features, Bright Smiles Dental was able to automate patient notifications, streamline bookings, and reduce no-show rates.",
  results: [
    "30% decrease in missed appointments",
    "Improved patient satisfaction due to seamless appointment scheduling and reminders",
    "Better utilization of clinic time with optimized appointment slots"
  ],
  quote: "Denteex has completely transformed our scheduling system. Our patients are happier, and we’re able to see more patients each day!"
},
{
  title: "Dental Health Care Center: Simplifying Patient Record Management",
  challenge: "Dental Health Care Center faced difficulties in managing patient records, leading to inefficiencies, time wasted searching for documents, and potential errors.",
  solution: "With Denteex’s centralized patient record management system, all patient data, including medical history, treatment plans, and imaging, was digitized and stored in one secure location.",
  results: [
    "50% reduction in time spent managing patient records",
    "Improved data accuracy with a centralized database",
    "Increased staff efficiency as team members could easily access and update records"
  ],
  quote: "The transition to Denteex has streamlined our entire record-keeping process. We can now access patient information in seconds, which allows us to focus more on patient care."
},
{
  title: "Family Dental Clinic: Expanding Patient Engagement with the Patient Portal",
  challenge: "Family Dental Clinic wanted to provide a more modern and convenient experience for their patients but struggled with engaging patients outside of their clinic visits.",
  solution: "With Denteex’s Patient Portal, Family Dental Clinic offered their patients secure access to their treatment history, scheduling, and billing information online.",
  results: [
    "20% increase in patient engagement through the online portal",
    "Reduced phone calls for appointment scheduling as patients could easily manage appointments online",
    "Better patient retention as patients appreciated the convenience and transparency"
  ],
  quote: "The Patient Portal has been a game-changer for us. Our patients love the convenience, and it’s reduced the time our staff spends on administrative tasks."
}
];

const Showcase = () => {
return (
  <div
    className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">

    <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Case Studies
              </h1>
              
              <p className="text-lg md:text-xl mx-auto my-5">
            Welcome to the Denteex Case Studies page, where we showcase the success stories of dental practices that have transformed their operations with our software solutions. These case studies highlight how Denteex has helped dental clinics streamline their processes, improve patient care, and boost business growth. By sharing these real-world experiences, we hope to inspire you to take the next step in optimizing your dental practice.
          </p>
            </div>
        </header>

    <div className="px-10 mb-10">
      

      {caseStudies.map((study, index) => (
        <div key={index} className="mb-8 p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
          <h2 className="text-xl font-semibold">{study.title}</h2>
          <p className="mt-2 italic"><strong>Challenge:</strong> {study.challenge}</p>
          <p className="mt-2"><strong>Solution:</strong> {study.solution}</p>
          <p className="mt-2"><strong>Results:</strong></p>
          <ul className="list-disc list-inside ml-5">
            {study.results.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
          <p className="mt-2 italic"><strong>Quote:</strong> &quot;{study.quote}&quot;</p>
        </div>
      ))}

      <div className="mt-10">
        <h2 className="text-lg font-bold">Why Choose Denteex?</h2>
        <p className="mt-2">
          Denteex software is designed to address the unique needs of dental practices, regardless of size. From appointment scheduling to billing and patient record management, we offer a range of features that improve efficiency, reduce costs, and enhance the patient experience.
        </p>
        <p className="mt-2">
          Our case studies demonstrate how practices just like yours have successfully integrated Denteex to streamline operations, boost productivity, and improve patient satisfaction.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold">Start Your Success Story Today</h2>
        <p className="mt-2">
          Ready to experience the benefits of Denteex for your dental practice? Let us show you how our software can help you reach your goals.
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
  </div>
);
};

export default Showcase;