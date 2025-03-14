"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import SchedulePopup from "./scheduleopopup";
import CalendlyPopupButton from "./Calendly/CalendlyPopupButton";


const Header = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-[6px] top-5 sticky  md:mx-auto z-[1000] 
                xl:w-4/5 2xl:w-[68%] bg-black flex items-center 
                justify-between py-6 px-4 md:px-8"
    >

      {/* Navbar content goes here */}


      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo/logoMain.png"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-x-10 items-cente font-medium text-lg text-white">
        <Link href={"/"} className="hover:text-blue-500">
          Home
        </Link>
        <Link href={"/about-us"} className="hover:text-blue-500">
          About
        </Link>
        <Link href={"/services"} className="hover:text-blue-500">
          Services
        </Link>
        <Link href={"/blog-page"} className="hover:text-blue-500">
          Blog
        </Link>
        <Link href={"/contact-us"} className="hover:text-blue-500">
          Connect
        </Link>
        {/* <Link href={"/meeting"} className="hover:text-blue-500">
          Meeting
        </Link> */}
      </div>

      {/* Mobile Hamburger Menu */}


      <div className="md:hidden">
        <button
          className="absolute top-9 right-4 text-gray-700 text-4xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed top-0 right-0 w-full h-screen bg-gray-800 shadow-lg py-6 px-6 flex flex-col justify-between">
              <div>
                <button
                  className="absolute top-4 right-4 z-50 text-white mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 font-bold text-5xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="flex justify-center flex-col items-center gap-2 mt-8">
                  <Link
                    href="/"
                    className="block text-white hover:text-blue-500 duration-200 text-2xl font-bold font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="block text-white hover:text-blue-500 duration-200 text-2xl font-bold font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="block text-white hover:text-blue-500 duration-200 text-2xl font-bold font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog-page"
                    className="block text-white hover:text-blue-500 duration-200 text-2xl font-bold font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block text-white hover:text-blue-500 duration-200 text-2xl font-bold font-mono"
                    onClick={() => setMenuOpen(false)}
                  >
                    Connect
                  </Link>
                </div>



                <div className="flex justify-center items-center mt-10">
                  <button
                    // onClick={() => setShowScheduler(true)}
                    className="
              py-3 px-6
              text-lg
              hover:bg-[#abcbff]
              rounded-[6px]
              border-2
              border-black
              text-white
              bg-[#121212]
              transition
              duration-200
              hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
              dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
            "
                  >
                                <CalendlyPopupButton text="Schedule a Call" />

                  </button>
                  {showScheduler && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                      onClick={() => setShowScheduler(false)} // Close modal on background click
                    >
                      <div
                        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
                      >
                        <h2 className="text-lg font-bold mb-4 text-center">Schedule Your Demo</h2>
                        <iframe
                          src="https://calendly.com/kodekalp/get-connect-with-kodekalp"
                          style={{ border: 0 }}
                          width="100%"
                          height="400"
                          frameBorder="0"
                        ></iframe>
                        <button
                          onClick={() => setShowScheduler(false)}
                          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>







              </div>



              {/* Denteex Logo and Follow Us Section */}

              <div className=" mb-20">
                <div className="flex justify-center">
                  <Image
                    src="/logo/denteex-logo.png"
                    width={10000}
                    height={10000}
                    className="w-20"
                    alt="Denteex Logo"
                  />
                </div>

                <div className="mt-8 text-center">
                  <p className="font-semibold text-white">Follow Us</p>
                  <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/denteex"
                        className="text-blue-500 hover:underline hover:text-blue-500 duration-200"
                      >
                        <FaFacebookSquare />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/denteex"
                        className="text-orange-700 hover:underline hover:text-orange-600 duration-200"
                      >
                        <FaInstagramSquare />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/denteexindia"
                        className="text-blue-700 hover:underline hover:text-blue-500 duration-200"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>





      {/* Book a Call Button */}

      <div className="relative">
        {/* Link Component */}

        
        <button
                    // onClick={() => setShowScheduler(true)}
                    className="
                    py-3 px-6
                    text-lg
                    hover:bg-[#abcbff]
                    rounded-[6px]
                    border-2
                    border-black
                    text-black
                    bg-white
                    transition
                    duration-200
                    hover:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
                    "
                  >
                                <CalendlyPopupButton text="Schedule a Call" />

                  </button>



        {/* Popup Modal */}
        {showScheduler && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setShowScheduler(false)} // Close modal on background click
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-[90%]"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
            >
              <h2 className="text-lg font-bold mb-4">Schedule Your Demo</h2>
              <iframe
                src="https://calendly.com/kodekalp/get-connect-with-kodekalp"
                style={{ border: 0 }}
                width="100%"
                height="400"
                frameBorder="0"
              ></iframe>
              <button
                onClick={() => setShowScheduler(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}


      </div>

    </div>
  );
};

export default Header;

































// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
// import SchedulePopup from "./scheduleopopup";

// const Header = () => {
//   const [showScheduler, setShowScheduler] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [visible, setVisible] = useState(true); // Track navbar visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

//   // Scroll event handler
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setVisible(false); // Hide navbar on scroll down
//       } else {
//         setVisible(true); // Show navbar on scroll up
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className={`overflow-hidden rounded-[6px] sticky top-0 z-[1000]
//                   transition-transform duration-300 ease-in-out
//                   ${visible ? "translate-y-0" : "-translate-y-full"}
//                   xl:w-4/5 2xl:w-[68%] bg-black flex items-center
//                   justify-between py-6 px-4 md:px-8 mx-auto`}
//     >
//       {/* Logo */}
//       <Link href={"/"}>
//         <Image
//           src={"/logo/w-denteex-logo.png"}
//           alt="Logo"
//           width={1000}
//           height={1000}
//           className="w-28"
//         />
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex gap-x-10 items-center font-medium text-lg text-white">
//         <Link href={"/"} className="hover:text-blue-500">Home</Link>
//         <Link href={"/about-us"} className="hover:text-blue-500">About</Link>
//         <Link href={"/services"} className="hover:text-blue-500">Services</Link>
//         <Link href={"/blog-page"} className="hover:text-blue-500">Blog</Link>
//         <Link href={"/contact-us"} className="hover:text-blue-500">Connect</Link>
//       </div>

//       {/* Mobile Hamburger Menu */}
//       <div className="md:hidden">
//         <button
//           className="absolute top-9 right-4 text-gray-700 text-4xl font-bold"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {menuOpen && (
//           <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40">
//             <div className="fixed top-0 right-0 w-full h-screen bg-gray-800 shadow-lg py-6 px-6 flex flex-col justify-between">
//               <button
//                 className="absolute top-4 right-4 z-50 text-white"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 font-bold"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>

//               <div className="flex flex-col items-center mt-8">
//                 <Link href="/" className="text-white hover:text-blue-500 text-2xl font-bold">Home</Link>
//                 <Link href="/about-us" className="text-white hover:text-blue-500 text-2xl font-bold">About</Link>
//                 <Link href="/services" className="text-white hover:text-blue-500 text-2xl font-bold">Services</Link>
//                 <Link href="/blog-page" className="text-white hover:text-blue-500 text-2xl font-bold">Blog</Link>
//                 <Link href="/contact-us" className="text-white hover:text-blue-500 text-2xl font-bold">Connect</Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Book a Call Button */}
//       <button
//         onClick={() => setShowScheduler(true)}
//         className="hidden md:block py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-black bg-white transition duration-200"
//       >
//         Book a call
//       </button>

//       {/* Popup Modal */}
//       {showScheduler && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={() => setShowScheduler(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-[90%]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-lg font-bold mb-4">Schedule Your Demo</h2>
//             <iframe
//               src="https://calendly.com/kodekalp/get-connect-with-kodekalp"
//               style={{ border: 0 }}
//               width="100%"
//               height="400"
//               frameBorder="0"
//             ></iframe>
//             <button
//               onClick={() => setShowScheduler(false)}
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;




























