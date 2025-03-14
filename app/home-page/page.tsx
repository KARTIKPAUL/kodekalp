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
      className=" 
        overflow-clip 
        inset-0 
        -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]">

      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          {/* <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Advanced Dentist Software for Modern Dental Practices"
          /> */}
        </div>
        {/* <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
          Have a look at some of our recent projects.
        </p> */}

        {/* <BlurFadeDemo /> */}


          <div className="">
          {/* Hero Section */}
          <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Advanced Dentist Software for Modern Dental Practices
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto my-5">
                Welcome to Denteex – the all-in-one dental software designed for
                dental clinics of all sizes. Denteex provides everything you need to
                streamline patient management, simplify record-keeping, and improve
                billing, making it an indispensable tool for modern dental practices.
              </p>
            </div>
          </header>

          {/* Features Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Key Features of Denteex Dental Software
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <Image
                    src="/images/appointment.png"
                    width={80}
                    height={80}
                    alt="Appointment Management"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">Appointment Management</h3>
                  <p>Simplified booking and appointment reminders.</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <Image
                    src="/images/patient-records.png"
                    width={80}
                    height={80}
                    alt="Patient Records"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">Patient Records</h3>
                  <p>Secure storage for treatment records, X-rays, and more.</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <Image
                    src="/images/billing.png"
                    width={80}
                    height={80}
                    alt="Billing & Finance"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">Billing & Finance</h3>
                  <p>Accurate billing tools to manage patient and insurance payments.</p>
                </div>
                {/* Feature 4 */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <Image
                    src="/images/patient-portal.png"
                    width={80}
                    height={80}
                    alt="Patient Portal"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">Patient Portal</h3>
                  <p>
                    Access to personal records, payments, and scheduling for patients.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-gray-900 text-white py-12 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Dental Practice?
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                Join countless dental clinics already benefiting from Denteex. Start
                streamlining your operations and enhancing patient care today.
              </p>
              <a
                href="/demo-request"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                Request a Demo
              </a>
            </div>
          </section>
          </div>



        <LetsMakeThingsHappenSection />


      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
