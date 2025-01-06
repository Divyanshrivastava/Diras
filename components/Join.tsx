"use client"
import { socialMedia } from "@/data";
import React, { RefObject, useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import {motion, MotionValue, useMotionTemplate, useMotionValue, useScroll, useTransform} from 'framer-motion'

const useRelativeMousePosition = (to: RefObject<HTMLElement | null>): [MotionValue<number>, MotionValue<number>] => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
      if(!to.current) return ;
      const {top, left} = to.current?.getBoundingClientRect();
      mouseX.set(event.x-left);
      mouseY.set(event.y-top);
  };

  useEffect ( () => {
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

  return [mouseX, mouseY];
}


const Join= () => {

  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300]);
  const backgroundPositionX = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section id='join' className="bg-black text-white p-10  py-10">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"

          animate= {{
            backgroundPositionX: [0, -1000],
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear"
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(/stars.png)`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
          ></div>

          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl mx-auto sm:text-3xl tracking-tighter text-center font-medium">
              Ready to discuss about the projects
            </h2>
            <p className="text-center text-lg md:text-xl mx-auto max-w-xs text-white/70 px-4 mt-5 tracking-tight">
              Get in touch immediately
            </p>

            <div className="flex justify-center mt-5">
              <MagicButton
                title="Let's Discuss"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
