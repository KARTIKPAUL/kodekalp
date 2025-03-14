"use client";
import Link from "next/link";
import React from "react";
import Globe from "../../components/Style/globe";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      {/* Contact Details Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <header className="px-6 mb-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              At Kodekalp, we value your time and are committed to providing
              prompt and effective assistance. Let us help you transform your
              software practice with our innovative solutions.
            </p>
          </div>
        </header>

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white shadow-xl p-8 rounded-2xl border border-blue-50 hover:shadow-2xl transition-shadow">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 6362 720 677</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon - Sun | 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Office
                    </h3>
                    <p className="text-gray-600">
                      KodeKalp Global Technologies
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Near Chhatrapati Sambhaji Chowk, Fulchur, Gondia-441601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email
                    </h3>
                    <a
                      href="mailto:info@kodekalp.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      info@kodekalp.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4 text-2xl">
                  <a
                    href="https://www.instagram.com/kodekalp_global_technologies/"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/kodekalp/"
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=916362720677"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.youtube.com/@KodeKalpGlobalTechnologies"
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-xl p-8 rounded-2xl border border-blue-50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-600">
                  Have questions? We are here to help! Reach out anytime.
                </p>
              </div>

              <div className="mb-8">
                <Link
                  href="https://calendly.com/kodekalp/get-connect-with-kodekalp"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg w-full justify-center"
                >
                  Schedule a Free Consultation
                </Link>
              </div>

              <div className="flex items-center my-8">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 12345 67890"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
