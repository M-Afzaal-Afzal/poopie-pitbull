import React from "react";
import { Fade } from "react-reveal";
import Image from "next/image";

function Teams() {
  return (
    <div className=" flex flex-col bg-black-default px-4 md:px-8 lg:px-16 lg:py-40 md:py-12 py-8">
      <Fade bottom>
        <h1 className=" head relative text-white-light text-3xl md:text-5xl pb-2 font-semibold md:font-extrabold pt-4">
          Team
        </h1>
      </Fade>
      <div className="grid items-center md:grid-cols-3 grid gap-4 md:gap-y-12 md:gap-x-8 gap-y-16 md:gap-y-4 justify-center items-center text-center pt-16">
        <Fade bottom>
          <div className="col-span-3 justify-self-center">
            <Image
              src="/images/6.png"
              alt="David"
              layout={'intrinsic'}
              width={500}
              height={500}
              className="rounded-full img-1"
            />
            <h1 className=" mt-3.5 grad-1 text-white-light text-3xl sm:text-4xl md:text-5xl pb-2 font-semibold pt-4">
              David
            </h1>
            <p className="text-white-light text-base">
              Project Manager / Marketing
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className={'md:col-span-1 col-span-3'}>
            <Image
              src="/images/3.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-2"
            />
            <h1 className=" mt-3.5 grad-2 text-white-light text-3xl sm:text-4xl md:text-5xl pb-2 font-semibold pt-4">
              Gangadara
            </h1>
            <p className="text-white-light text-base">Graphics Designer</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className={'md:col-span-1 col-span-3'}>
            <Image
                layout={'intrinsic'}
              src="/images/2.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-3"
            />
            <h1 className=" mt-3.5 grad-3 text-white-light text-3xl sm:text-4xl md:text-5xl pb-2 font-semibold pt-4">
              Afzaal Afzal
            </h1>
            <p className="text-white-light text-base">FrontEnd Developer</p>
          </div>
        </Fade>
        <Fade left>
          <div className={'md:col-span-1 col-span-3'}>
            <Image
              src="/images/7.png"
              alt=""
              width={300}
              height={300}
              className="rounded-full img-4"
            />
            <h1 className=" mt-3.5 grad-4 text-white-light text-3xl sm:text-4xl md:text-5xl pb-2 font-semibold pt-4">
              Abdullah
            </h1>
            <p className="text-white-light text-base">BlockChain Developer</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Teams;

{
  /* <div className="max-w-7xl m-auto text-center">
<div className="md:px-12 px-4">
  <Fade bottom>
    <h1 className="heading-title">Road map</h1>
  </Fade>
  <Fade bottom>
    <p className="text-grey-default lg:mb-16 md:mb-12 mb-8">
      WE ARE THERE FOR YOU NO MATTER WHAT
    </p>
  </Fade>

  <div className="max-w-3xl m-auto text-center">
    <Fade bottom>
      <p className="text-Offwhite-default mb-3 leading-5">
        Neuron Storm is a concept centered NFT collectibles of 7,777
        unique generative pieces on ETH block chain Each Neuron Storm
        will have up to 18 traits and a meaning behind the combination
        of Neuron’s lifelines We will be behind you every step of the
        way and enjoy your company in the journey of Neuron Storm.
      </p>
    </Fade>
  </div>
  <div>
    <Fade bottom>
      <p className="text-Offwhite-default mb-5">
        Here’s our short-term and mid-term plans, LET’S GO…
      </p>
    </Fade>
  </div>
  <div className="w-full flex justify-center mb-12">
    <Fade bottom>
      <img src="./images/Polygon 1.png" alt="" />
    </Fade>
  </div>
</div>
</div> */
}
