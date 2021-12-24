import React from "react";
import { Fade } from "react-reveal";
function Specs() {
  return (
    <div className=" flex flex-col bg-black-default px-4 sm:px-8 md:px-16 lg:py-16 md:py-6 py-4">
      <div className="">
        <Fade bottom>
          <h1 className="head head-specs relative text-white-light text-3xl md:text-5xl pb-2 font-semibold md:font-extrabold pt-4">
            Poopie Pitbull Specs
          </h1>
        </Fade>
        <Fade bottom>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 max-w-5xl place-items-center md:place-items-start  m-auto mt-8 md:mt-16 gap-4 gap-x-20">
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Backgrounds{" "}
            </h2>
            <span className="text-8xl grad-1 font-mono font-bold">5</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Head wear{" "}
            </h2>
            <span className="text-8xl grad-3 font-mono font-bold">8</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Skins{" "}
            </h2>
            <span className="text-8xl grad-3 font-mono font-bold">5</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Eyes{" "}
            </h2>
            <span className="text-8xl grad-1 font-mono font-bold">5</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Dress{" "}
            </h2>
            <span className="text-8xl grad-2 font-mono font-bold">17</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              For mouth{" "}
            </h2>
            <span className="text-8xl grad-2 font-mono font-bold">13</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Ear rings{" "}
            </h2>
            <span className="text-8xl grad-4 font-mono font-bold">12</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              For neck{" "}
            </h2>
            <span className="text-8xl grad-4 font-mono font-bold">18</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Eye wear{" "}
            </h2>
            <span className="text-8xl grad-3 font-mono font-bold">14</span>
          </div>
          <div className="flex justify-start items-center p-4">
            <h2 className="text-white-light font-semibold text-2xl mr-20">
              Mustache{" "}
            </h2>
            <span className="text-8xl grad-3 font-mono font-bold">4</span>
          </div>
        </div>
        <div className="w-3/5 m-auto flex justify-center items-center" >
            <h1 className="grad-4 text-6xl font-bold mt-12 " >101 traits</h1>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Specs;
