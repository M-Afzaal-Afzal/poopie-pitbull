import React, { useState } from "react";

import Carusel from "../components/Carusel";
import Timer from "../components/Timer";
function Header() {
  const time = new Date("December 30, 2021 06:00");
  // time.setSeconds(time.getSeconds() + 1055000);

  const [quantity, setQuantity] = useState(1);
  const eth = 0.03;
  const total = eth * quantity;

  const onMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const onPlusClick = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div className="bg-black-default px-8 md:py-4">
      <div className="max-w-7xl m-auto  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="md:col-span-2 md:max-w-3xl">
            <h1 className="grad text-3xl md:text-6xl pb-2 font-semibold md:font-extrabold pt-4">
              Mint Your Poopie Pitbull Now to Participate In Prize Raffles And
              Cash Giveaways.
              <span className="text-white-light text-base md:text-2xl pb-2 font-semibold md:font-extrabold">
                (Prize pool is $500,000)
              </span>
            </h1>
            <p className=" font-normal md:font-semibold text-base text-grey-default my-7 md:max-w-xl">
              Poopie Pitbull is a collection of 9,999 of unique Nft’s on the ETH
              BlockChain
            </p>
            <div>
              <Timer expiryTimestamp={time} />
            </div>
          </div>
          <div>
            <Carusel />
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 ">
        <div className=" flex items-center justify-center pt-16 lg:pt-0">
          <div className="flex flex-col justify-center items-center border-4 rounded border-gradTo p-4 w-96">
            <h1 className="grad text-xl md:text-3xl pb-2 font-semibold mb-7">
              Main Drop
            </h1>
            <div className="flex justify-center">
              <div className="flex justify-between mr-10">
                <button onClick={onMinusClick} className="text-white-light mr-3">-</button>
                <input
                  className="w-12 text-center bg-transparent text-white-light"
                  type="text"
                  value={quantity}
                />
                <button onClick={onPlusClick} className="text-white-light ml-3">+</button>
              </div>
              <div>
                <button className="outline-none bg-white-light rounded-sm px-4 py-1 font-bold bg-gradient-to-b from-gradFrom to-gradTo ">
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="grid grid-cols-2 justify-between my-8">
            <div className="text-center">
              <p className="text-grey-default">Presale</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
                0.03 ETH
              </h1>
            </div>
            <div>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
                01 Jan 2022-07 Jan 2022
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between my-3">
            <div className="text-center">
              <p className="text-grey-default">Mint Price</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
                0.05 ETH
              </h1>
            </div>
            <div className="text-center">
              <p className="text-grey-default">Public Sale</p>
              <h1 className="grad md:text-2xl pb-2 font-semibold pt-4">
              08 Jan 2022
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
