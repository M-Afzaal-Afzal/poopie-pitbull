import React from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
function About() {
  return (
    <div className=" flex flex-col bg-black-default px-4 md:px-8 lg:px-16 lg:py-40 md:py-12 py-8">
      <Fade bottom>
        <h1 className=" head relative text-white-light text-3xl md:text-5xl pb-2 font-semibold md:font-extrabold pt-4">
          About
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center md:place-items-start justify-between items-center mt-12">
        <Fade left>
          <p className=" text-xl text-white-light leading-10">
            We rescued Cali from an animal rescue center in Los Angeles three
            years ago. She has been the sweetest, most loving dog we have ever
            been with and to give back, we will be donating to animal shelters
            across the United States for each milestone we reach.
            <br />
            <br />
            Each Poopie Pitbull that is minted will help support animals in need
            waiting to be rehomed.
          </p>
        </Fade>
        <Fade bottom>
          <div className="relative ">
            <Image
              src="/images/about.png"
              alt=""
              width={500}
              height={500}
              className="absolute"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
