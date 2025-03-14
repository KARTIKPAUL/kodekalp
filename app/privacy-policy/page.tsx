import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div
      className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      
      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy – Denteex
              </h1>
              
          
              <p className="text-lg md:text-xl mx-auto my-5">
              At Denteex, we are committed to protecting your privacy and ensuring that your personal and business information is secure. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our services, including our website, software, and any other related platforms.
              By using Denteex services, you agree to the collection, use, and disclosure of your information in accordance with this Privacy Policy. Please take the time to read through this policy carefully.
            </p>
            </div>
        </header>


      <div className="px-4 py-8 mx-auto">
        

        <div className="mb-6">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We collect various types of information to provide you with the best possible service. This includes:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Personal Information:</strong> When you sign up for Denteex, we may collect personal information such as your name, email address, phone number, and billing details.</li>
            <li><strong>Business Information:</strong> We collect details about your dental practice, including business name, address, industry type, and number of employees.</li>
            <li><strong>Usage Data:</strong> This includes information on how you access and interact with our software, website, and services. This can include device information, IP addresses, browser types, and usage patterns.</li>
            <li><strong>Patient Information:</strong> As a part of the dental practice management solution, Denteex may handle patient records and treatment details. We ensure that patient data is stored securely and is accessible only to authorized users.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Provide and Improve Services:</strong> To deliver the Denteex software and services you requested and to improve our offerings.</li>
            <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical support, and resolve issues.</li>
            <li><strong>Billing and Payment:</strong> To process subscription payments and any related financial transactions.</li>
            <li><strong>Communications:</strong> To send you important information regarding updates, offers, or changes to the Denteex services.</li>
            <li><strong>Analytics:</strong> To monitor and analyze the performance and usage of our services for improvements.</li>
            <li><strong>Marketing:</strong> To send marketing communications related to Denteex products and services. You can opt-out of these communications at any time.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">3. Data Security</h2>
          <p>We implement a variety of security measures to ensure the safety of your personal and business information. These include encryption, access controls, and regular security audits to protect against unauthorized access, alteration, or destruction of your data.</p>
          <p>However, please be aware that while we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">4. Sharing Your Information</h2>
          <p>Denteex does not share, sell, or rent your personal or business information to third parties, except in the following cases:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, providing customer support, or improving our services. These service providers are obligated to protect your information and use it only for the purposes for which it was provided.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your information when required by law, such as to comply with a subpoena or legal process, or if we believe such action is necessary to protect our rights or the safety of others.</li>
            <li><strong>Business Transfers:</strong> If Denteex is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">5. Data Retention</h2>
          <p>We retain your personal and business information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including to comply with legal, accounting, or reporting obligations. If you no longer wish to use our services, you can request that we delete your account. Please note that we may retain certain information for a period of time as required by law.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">6. Your Rights and Choices</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Access:</strong> You can request access to the information we hold about you.</li>
            <li><strong>Correction:</strong> You can update or correct any personal or business information that is inaccurate or incomplete.</li>
            <li><strong>Deletion:</strong> You can request the deletion of your personal or business information, subject to certain limitations.</li>
            <li><strong>Opt-out of Marketing Communications:</strong> You can opt-out of receiving marketing emails from us by following the unsubscribe link in any of our emails.</li>
            <li><strong>Data Portability:</strong> You may request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:support@denteex.com" className="text-blue-500">support@denteex.com</a>.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">7. Cookies and Tracking Technologies</h2>
          <p>Denteex uses cookies and similar tracking technologies to enhance your experience with our website and services. These technologies help us analyze trends, track user activities, and gather demographic information. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of the website may not function properly if you disable cookies.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
          <p>Denteex does not knowingly collect or solicit personal information from individuals under the age of 18. If we become aware that we have collected personal information from a child, we will take steps to delete that information.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">9. Third-Party Links</h2>
          <p>Our website and software may contain links to third-party websites or services. These links are provided for your convenience, but we are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party services you visit.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">10. Changes to This Privacy Policy</h2>
          <p>Denteex reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We recommend that you review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">11. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your privacy rights, please contact us:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Email: <a href="mailto:support@denteex.com" className="text-blue-500">support@denteex.com</a></li>
            <li>Phone: +91-6362720677</li>
            <li>Address: KodeKalp Global Technologies, near Chhatrapati Sambhaji chowk, Fulchur Peth, Fulchur Tola, Gondia, Maharashtra 441601</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;