import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { FaFacebookSquare , FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    // <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 text-gray-700">
    <div >
    {/* Navbar */}
      {/* <ShowcaseNavbar /> */}

      {/* Main Content */}
      <div className="mt-7 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        {/* Assistance Section */}
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

        {/* Contact Details */}
        <section className="mt-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Support */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p>📧 <a href="mailto:support@denteex.com" className="text-blue-500">support@denteex.com</a></p>
              <p>📞 Phone: +91-63627 20677</p>
              <p>💬 Live Chat: Available 24/7 on our website</p>
            </div>
            {/* Sales and Inquiries */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Sales and Inquiries</h3>
              <p>📧 <a href="mailto:sales@denteex.com" className="text-blue-500">sales@denteex.com</a></p>
            </div>
          </div>
        </section>

        {/* Address Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Visit Us</h2>
          <p>KodeKalp Global Technologies,</p>
          <p>near Chhatrapati Sambhaji Chowk,</p>
          <p>Fulchur Peth, Fulchur Tola, Gondia, Maharashtra 441601</p>

          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.888072482446!2d80.20470987526784!3d21.43364398031893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b474e1d4b6dbed3%3A0xe46563c2448277ed!2sKodeKalp%20Global%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1732197249981!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Form</h2>
          <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Follow Us */}
        <div className="my-10 flex justify-center">
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Follow Us</h2>
          <ul className="flex space-x-6">
            <li>
              <Link href="https://www.linkedin.com/company/denteex" className="hover:underline hover:text-blue-500 duration-200 text-blue-600 w-10 h-10"> <FaFacebookSquare/> </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/denteex" className="hover:underline hover:text-orange-600 duration-200 text-orange-700"> <FaInstagramSquare/> </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/denteexindia" className="hover:underline hover:text-blue-600 duration-200 text-blue-500"> < FaLinkedinIn/> </Link>
            </li>
          </ul>
        </section>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ContactUs;
