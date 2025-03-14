import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare , FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import CalendlyPopupButton from "@/components/Calendly/CalendlyPopupButton"
import CalendlyWidget from "@/components/Calendly/CalendlyWidget"
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900  px-6 md:px-0 md:mx-auto border-t">

        <div className=" text-white py-10 font-thin">
          <div className="container mx-auto px-4">
          {/* <div className='bg-[#277FCA] mt-4  rounded-full w-fit items-center p-2 mx-auto '> */}
          {/* <Link href='https://calendly.com/kodekalp/get-connect-with-kodekalp' className='flex flex-row items-center mx-4'>
            <IoCallOutline className='link-icon mr-2' />
            <CalendlyPopupButton text="Schedule a Call" /> 
          </Link> */}
        {/* </div> */}
        {/* <CalendlyWidget event='get-connect-with-kodekalp'/> */}




            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-green-600 text-gray-300">Home</Link></li>
                  <li><Link href="/about-us" className="hover:text-green-600 text-gray-300">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-green-600 text-gray-300">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-green-600 text-gray-300">Pricing</Link></li>
                  <li><Link href="/demo-project" className="hover:text-green-600 text-gray-300">Demo Request</Link></li>
                  <li><Link href="/contact-us" className="hover:text-green-600 text-gray-300">Contact Us</Link></li>
                  <li><Link href="/careers-at-denteex" className="hover:text-green-600 text-gray-300">Careers</Link></li>
                </ul>
              </div>

             {/* Products and Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products and Services</h4>
            <ul className="space-y-2">
              <li><Link href="/dentist-software" className="hover:text-green-600 text-gray-300">Dentist Software</Link></li>
              <li><Link href="/professional-web-development" className="hover:text-green-600 text-gray-300">Professional Website Development</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-green-600 text-gray-300">Digital Marketing</Link></li>
              {/* <li><Link href="/socialmediamanagement" className="hover:text-green-600 text-gray-300">Social Media Management</Link></li>
              <li><Link href="/leadcampign" className="hover:text-green-600 text-gray-300">Lead Campaigns</Link></li>
              <li><Link href="/whatsappautomation" className="hover:text-green-600 text-gray-300">WhatsApp Automation</Link></li>
              <li><Link href="/gmboptimization" className="hover:text-green-600 text-gray-300">GMB Optimization</Link></li> */}
            </ul>
            <h4 className="font-bold text-lg mt-6 mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/blog-page" className="hover:text-green-600 text-gray-300">Blog</Link></li>
                  <li><Link href="/case-studies" className="hover:text-green-600 text-gray-300">Case Studies </Link></li>
                </ul>
          </div>

              {/* Resources */}
              <div>
               
                <h4 className="font-bold text-lg mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/terms-condition" className="hover:text-green-600 text-gray-300">Terms & Conditions</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-green-600 text-gray-300">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-green-600 text-gray-300">Refund Policy</Link></li>
                </ul>
                <h4 className="font-bold text-lg mt-6 mb-4">Pages</h4>
                <ul className="space-y-2">
                <li><Link href="/faqs-denteex" className="hover:text-green-600 text-gray-300">FAQs </Link></li>
                <li><Link href="/fsqs-denteex" className="hover:text-green-600 text-gray-300">Docs </Link></li>
                </ul>
              </div>

              {/* Legal & Connect */}
              <div className="">
                
                <h4 className="font-bold text-lg  mb-4">Connect With Us</h4>
                <p className="mb-1 font-semibold">Contact: <Link href="mailto:info@denteex.com" className="hover:text-green-600 font-normal text-gray-300">info@denteex.com</Link></p>
                <p className="mb-1 font-semibold">Phone: <Link href="tel:+916362720677" className="hover:text-green-600 font-normal text-gray-300">+91 6362 720 677</Link></p>
                <p className="mb-1 font-semibold">Address: <span className="hover:text-green-600 font-normal text-gray-300 cursor-pointer">KodeKalp Global Technologies, near Chhatrapati Sambhaji chowk, Fulchur Peth, Fulchur Tola, Gondia, Maharashtra 441601</span></p>
                <div className="mt-6">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.888072482446!2d80.20470987526784!3d21.43364398031893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b474e1d4b6dbed3%3A0xe46563c2448277ed!2sKodeKalp%20Global%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1732197249981!5m2!1sen!2sin"
                width="100%"
                height="200"
                className="rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
              </div>
            </div>

            {/* Logo Section */}
            
            <div className="flex justify-center">
              <Image
                src="/logo/denteex-logo.png"
                width={10000}
                height={10000}
                className="w-40"
                alt="Denteex Logo"
              />
            </div>

            {/* Social Media Links */}
            <div className="mt-8 text-center">
              <p>Follow Us:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="https://www.facebook.com/denteex" className="hover:text-green-600 text-gray-300"><FaFacebookSquare /></Link>
                <Link href="https://www.linkedin.com/company/denteex" className="hover:text-green-600 text-gray-300">< FaInstagramSquare/></Link>
                <Link href="https://www.instagram.com/denteexindia" className="hover:text-green-600 text-gray-300"> <FaLinkedinIn /></Link>
                {/* <Link href="[Twitter Link]" className="hover:text-green-600 text-gray-300">Twitter</Link> */}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-400 font-mono">
              <p>© 2024 Denteex. All Rights Reserved.</p>
              <p>
                Denteex is committed to helping dental practices succeed with cutting-edge software solutions.
                Optimize your practice, streamline operations, and elevate patient care with Denteex dental software.
              </p>
            </div>

          </div>
        </div>
      </footer>
  );
};

export default Footer;
