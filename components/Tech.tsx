"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaLocationArrow,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { Cover } from "./ui/Cover";

export const SKILLS = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-2xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-2xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-2xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" /> },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="text-zinc-400 text-2xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-2xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500 text-2xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500 text-2xl" /> },
  {
    name: "Framer-Motion",
    icon: <TbBrandFramerMotion className="text-pink-600 text-2xl" />,
  },
];

const Tech = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "diras0502@gamil.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          {" "}
          Tech & <span className="text-purple">Tools</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-4 p-10 mt-8">
        {/* Card 1: Technologies and Skills */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 bg-black rounded-lg shadow-md p-6 border border-neutral-800">
          <h2 className="text-white text-center text-2xl font-bold mb-8 mt-6">
            Technologies I Have Worked With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg transition duration-300"
              >
                {skill.icon}
                <p className="text-white text-md mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:col-span-1 row-span-2 sm:col-span-1 md:col-span-2 bg-black rounded-lg p-4 shadow-md border flex flex-col justify-center items-center text-center gap-4 border-neutral-800">
          <h2 className="text-white text-center text-2xl font-bold mb-8">
            For Recruiters
          </h2>
          <p className=" text-center">
            Passionate and skilled full-stack developer with expertise in
            technologies such as React.js, Node.js, Express.js, MongoDB, and
            MySQL. A recent graduate in Information Technology(IOT) from Madhav
            Institute of Technology and Science, dedicated to building
            innovative web applications. Here's my resume, have a look
          </p>
          <a
            href="https://drive.google.com/file/d/1OALxcZyvRKA-6c6NziV1pwk9Zzp58R0I/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-black rounded-lg p-4 shadow-md border border-neutral-800">
          <h2 className="text-white text-center text-2xl font-bold mb-8 mt-6">
            Let's build projects together
          </h2>
          <p className="text-center text-md mt-5">
            {" "}
            for any enquiry, please click the button to copy my email.
          </p>

          <div className="relative text-center mt-8">
            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "hidden"
              }`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 bg-black rounded-lg p-4 shadow-md border border-neutral-800">
          <h2 className="text-white text-center text-2xl font-bold mb-8 mt-6">
            Latest Works !
          </h2>

          <p className="text-center text-md mt-5">
            Working on some latest projects, improving the designing and
            fucntionalities. Learning some new technology, exploring the concept
            of react native and more!
          </p>
          <div className="text-center mt-6">
            <Cover className="text-2xl">coming soon!</Cover>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
