import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <div
      className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto"
    >
      <header className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Terms & Conditions At Denteex
          </h1>
          <p className="text-lg md:text-xl mx-auto my-5">
            Welcome to Denteex! These Terms & Conditions (&quot;Terms&quot;) govern your use of the Denteex software and services (collectively referred to as &quot;the Service&quot;). By accessing or using the Service, you agree to comply with and be bound by these Terms. Please read them carefully before using our platform.
          </p>
        </div>
      </header>

      <div className="px-4 py-8 mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>By accessing or using the Denteex software and related services, you agree to be bound by these Terms, including any additional terms and conditions that may apply. If you do not agree to these Terms, you should not use the Service.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">2. Changes to Terms</h2>
          <p>Denteex reserves the right to modify or revise these Terms at any time. Any changes will be posted on this page with an updated date. It is your responsibility to review these Terms regularly to stay informed of any updates. Your continued use of the Service after any such changes constitutes your acceptance of the modified Terms.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account. You agree to use the Service only for lawful purposes and not to engage in any activity that could damage, disable, or impair the Service.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>All content provided on the Service, including text, graphics, logos, and software, is the property of Denteex or its licensors and is protected by applicable intellectual property laws. You agree not to reproduce, distribute, or create derivative works without prior written permission from Denteex.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>Denteex is not liable for any indirect, incidental, or consequential damages arising from your use of the Service. The Service is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis, without any warranties of any kind, either express or implied.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">6. Termination of Service</h2>
          <p>We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">7. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or relating to these Terms shall be resolved in the courts of [Your Jurisdiction].</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">8. Privacy Policy</h2>
          <p>Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Service, you consent to the practices described in the Privacy Policy.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">9. Contact Information</h2>
          <p>If you have any questions or concerns about these Terms, please contact us at support@denteex.com.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
