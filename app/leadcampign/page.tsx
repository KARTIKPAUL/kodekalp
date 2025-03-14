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
      
        <div className="flex justify-center items-center">
            <h1 className="my-10 justify-center items-center"> This is Lead Campign Page</h1>
        </div>

      
    </div>
  );
};

export default Showcase;
