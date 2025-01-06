"use client"

import { workExperience } from '@/data'; // Ensure the services data is in the correct path
import React from 'react';





const About = () => {
  return (
    <section id='about' className="bg-black text-white py-10">
      <div className="container mx-auto px-5">
        <p className="sm:text-[18px] text-[14px] text-purple uppercase tracking-wider text-center">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Overview.
        </h2>

        <div className="flex items-center justify-center">
          <p className="mt-4 text-purple text-[17px] max-w-3xl leading-[30px] text-center ">
          Dira's is a dynamic digital agency specializing in web development, content creation, SEO, and digital marketing. With a focus on innovation and strategy, we craft tailored solutions that enhance brand visibility, drive engagement, and deliver measurable results. Our dedicated team ensures every project aligns with your goals, helping your business thrive in the competitive digital landscape. At Dira's, we prioritize client satisfaction, combining creativity and technology to create impactful digital experiences. Let us help you transform your ideas into lasting success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 justify-items-center mt-8">
          {workExperience.map((card, index) => (
            <div
              key={index}
              className="h-80 w-65 flex flex-col justify-between items-center p-6 text-white bg-black shadow-md  border border-neutral-700"
            >
              {/* Image centered at the top */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-20 h-20 object-cover rounded-md mb-4 relative"
              />

              {/* Title and description */}
              <h3 className="text-xl font-semibold text-center relative">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-400 text-center relative">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
