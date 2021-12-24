import React, {useState} from "react";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {GiHamburgerMenu} from "react-icons/gi";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="  w-full bg-black-default z-50 top-0 shadow-md">
      <div className="flex justify-between bg-black-default z-50 h-20  py-5 shadow-lg border-b border-Offwhite-default">
        <div className="pl-5 flex self-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={30}
          />
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="px-1">
              <span className="cursor-pointer">
                <img
                  src="/assets/Component 15 – 4.png"
                  alt=""
                  className="w-10  pl-1  rounded-full"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="px-5 self-center cursor-pointer">
          <span onClick={toggleDrawer}>
            <GiHamburgerMenu className="w-8 h-8 text-secondary text-Offwhite-default" />
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{backgroundColor: "#222"}}
      >
        <div className="pl-5 pt-10">
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={30}
          />
        </div>
        <div onClick={toggleDrawer} className="flex flex-col pt-10 px-4">
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#Roadmap">Roadmap</AnchorLink>
          </span>

          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#Teams">Teams</AnchorLink>
          </span>
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#specs">specs</AnchorLink>
          </span>
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#About">About</AnchorLink>
          </span>
          <span className="text-xl text-Offwhite-default transition-all hover:text-secondary py-3.5 border-b border-primary">
            <AnchorLink href="#FAQ">FAQ</AnchorLink>
          </span>
          <div className=" flex justify-center py-10 ">
          <button className="outline-none bg-white-light text-sm rounded-lg font-semibold px-7 w-48 h-9" >Connect Wallet</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
