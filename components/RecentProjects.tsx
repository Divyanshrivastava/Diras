import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section className="bg-black py-10" id="projects">
  <div className="container mx-auto px-5">
    <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
      A small section of{" "}
      <span className="text-purple">recent projects.</span>
    </h1>

    <div className="flex flex-wrap items-stretch justify-center gap-6">
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex-grow flex-shrink-0 basis-full sm:basis-[48%] lg:basis-[32%] max-w-[40rem] px-2"
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[35rem] lg:w-[40rem] h-full rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Live →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
                >
                  <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default RecentProjects;
