import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
export const Hero = () => {
  return (
    <section id='hero'>
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="mt-2 absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[550px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">

        <div className="flex justify-center">
          <TextGenerateEffect className="text-5xl sm:text-7xl font-bold tracking-tighter text-center mt-7 inline-flex" words="Crafting Digital Experiences That Elevate Your Brand"
          />
           
        </div>
        <div className="flex justify-center">
        <p className='text-center md:tracking-wider mb-4 text-md md:text-lg lg:text-2xl mt-5 font-semibold'>
        Dira's combines innovation and expertise to deliver results that exceed expectations.
            </p>
        </div>
        <div className="flex justify-center mt-8">
        <a href='#about'>
              <button className="bg-white text-black py-3 px-5 rounded-lg font-medium flex gap-2 items-center">
                Show my work 
                <span><FaLocationArrow/></span>
              </button>
        </a>
        </div>
      </div>
    </div>
    </section>
  );
};

