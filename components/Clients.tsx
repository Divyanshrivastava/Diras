import { companies, testimonials } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinitemovingcard";

const Clients = () => {
  return (
    <section className="bg-black text-white ">
      <div className="container mx-auto px-5">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          About Our <span className="text-purple">Team</span>
        </h2>

        <div className="flex flex-col items-center mt-8 max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
