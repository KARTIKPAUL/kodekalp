import { WordPullUpDemo } from '@/components/demos/word-pull-up-demo'
import Image from 'next/image'
import React from 'react'



const services = () => {
  const services = [
    {
      icon: "/images/s_6.png",
      title: "IT Support",
      description:
        "Specialized technical support for dental practice operations",
    },
    {
      icon: "/images/s_1.png",
      title: "Digital Marketing",
      description:
        "Campaigns tailored to reach more potential patients",
    },
    {
      icon: "/images/s_5.png",
      title: "GMB Optimization",
      description:
        "Enhance your clinic's visibility on Google My Business",
    },
    {
      icon: "/images/s_3.png",
      title: "Social Media Management",
      description:
        "Build a strong social media presence",
    },
    {
      icon: "/images/s_4.png",
      title: "Lead and Awareness Cappaigns",
      description:
        "Attaract new patients to your practice",
    },
    {
      icon: "/images/s_2.png",
      title: "WhatsApp Automation",
      description:
        "Automated patient notifications and reminders.",
    },
  ];
  return (
    <div className='my-7'>
        <div className="mt-7 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <header className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Services Provided By Us !
              </h1>
              <p className="text-lg md:text-xl mx-auto my-5">
              At Denteex, we value your time and are committed to providing prompt and effective assistance. Whether you have questions about our software, need support, or want to learn more about how Denteex can transform your dental practice, our team is here for you.
              </p>
            </div>
        </header>
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default services
