import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import React from "react";
import Image from "next/image";

const RefundPolicy = () => {
  return (
    <div
      className="mt-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      
      <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Refund Policy – Denteex
              </h1>
              
          
        <p className="text-lg md:text-xl mx-auto my-5">
          At Denteex, we strive to provide exceptional services and software to our clients, ensuring complete satisfaction. Our Refund Policy is designed to be transparent and clear to avoid any misunderstandings and ensure a fair process for both parties. By using our services, you agree to the terms and conditions of this policy.
        </p>
            </div>
        </header>

      <div className="px-4 py-8 mx-auto">
        <p className="mb-6">
          At Denteex, we strive to provide exceptional services and software to our clients, ensuring complete satisfaction. Our Refund Policy is designed to be transparent and clear to avoid any misunderstandings and ensure a fair process for both parties. By using our services, you agree to the terms and conditions of this policy.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">1. No Refunds After Service Activation</h2>
          <p>Once you have made a payment and we have activated our services or provided access to the Denteex software, no refunds will be provided under any circumstances. This includes but is not limited to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Subscription fees for Denteex software</li>
            <li>Custom development work</li>
            <li>Any add-on services such as digital marketing, website development, etc.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">2. Refund Eligibility for Pre-Activation Payment</h2>
          <p>In case you have made an advance payment for our services or software subscription but the service has not yet been activated or the software has not been provided, you may request a refund within 7 days from the date of payment. Refunds will be processed only under the following conditions:</p>
          <ul className="list-disc list-inside mb-4">
            <li>The request is made within 7 days of payment.</li>
            <li>No services have been rendered or software has been provided.</li>
            <li>The request is made via the official communication channels (email or support portal).</li>
          </ul>
          <p>Any refund requests made after the 7-day period will be automatically rejected.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">3. Refund Process</h2>
          <p>To request a refund, the following steps must be followed:</p>
          <ol className="list-decimal list-inside mb-4">
            <li><strong>Initiate Refund Request:</strong> You must submit a formal refund request via email to <a href="mailto:support@denteex.com" className="text-blue-500">support@denteex.com</a> with the subject line &quot;Refund Request.&quot;</li>
            <li><strong>Provide Details:</strong> In your refund request, you must provide the following information:
              <ul className="list-disc list-inside">
                <li>Proof of payment (invoice or transaction details).</li>
                <li>Reason for requesting the refund.</li>
                <li>Description of the service or product that has not been delivered or activated.</li>
              </ul>
            </li>
            <li><strong>Review Period:</strong> Once your request is received, our team will review it within 5 business days. You will receive an email confirming whether your refund request is approved or rejected.</li>
            <li><strong>Refund Processed:</strong> If your refund request is approved, the amount will be refunded to the same payment method used for the transaction. Please allow up to 10 business days for the refund to be processed and reflected in your account.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">4. Non-Refundable Charges</h2>
          <p>Please note that certain charges are non-refundable, including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Setup Fees: Any one-time setup fees are non-refundable once the service has been initiated.</li>
            <li>Add-On Services: Charges for any add-on services like digital marketing campaigns, website development, GMB optimization, etc., are non-refundable once the service has been delivered.</li>
            <li>Custom Development: Any custom development work is non-refundable once work has started, regardless of progress.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">5. No Refunds for Cancellation After Service Activation</h2>
          <p>If you choose to cancel the service after it has been activated, no refunds will be provided. You will still be responsible for the full payment for the service during the agreed subscription or contract period.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">6. Exceptions</h2>
          <p>Denteex reserves the right to make exceptions to this policy at its discretion, in cases where there is clear evidence of non-delivery, service failure, or technical issues that were the fault of Denteex.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">7. Changes to the Refund Policy</h2>
          <p>Denteex reserves the right to modify or amend this Refund Policy at any time. Any changes will be communicated via email, and the updated policy will be posted on our website with the &quot;Last Updated&quot; date.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">8. Contact Us</h2>
          <p>For any questions or to submit a refund request, please contact us at:</p>
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

export default RefundPolicy;