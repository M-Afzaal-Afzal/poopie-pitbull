import React from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="w-full bg-black-default py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto  py-3">
        <div className="flex justify-between">
          <div className="flex self-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={200}
            height={30}
          />
          </div>
          <div className="flex self-center">
            <ul className="flex">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="text-Offwhite-default text-base font-bold mx-6 cursor-pointer">
                      <AnchorLink href={`#${item.url}`}>
                        {item.name}
                      </AnchorLink>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <button className="outline-none bg-white-light rounded-lg font-semibold px-5 w-48 h-9" >Connect Wallet</button>
            {/* <ul className="flex items-center">
              {socialLinks.map((item, index) => {
                return (
                  <li key={index} className="mx-2">
                    <a href={item.url} target="_blank">
                      <img src={item.socialIcon} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const links = [
  {
    id: 1,
    name: "Roadmap",
    url: "Roadmap"
  },
  {
    id: 2,
    name: "Teams",
    url: "Teams"
  },
  {
    id: 3,
    name: "Specs",
    url: "Specs"
  },
  {
    id: 3,
    name: "About",
    url: "About"
  },
  {
    id: 3,
    name: "FAQ",
    url: "FAQ"
  }
];

// const socialLinks = [
//   {
//     id: 1,
//     socialIcon: "/images/discord.png",
//     url: "https://discord.gg/7f465dkQve"
//   },
//   {
//     id: 2,
//     socialIcon: "/images/twitter.png",
//     url: "https://www.twitter.com/NeuronStormNFT"
//   },
//   {
//     id: 3,
//     socialIcon: "/images/instagram.png",
//     url: "https://www.instagram.com/neuronstorm/"
//   },
//   {
//     id: 4,
//     socialIcon: "/images/OpenSea.png",
//     url: "/"
//   }
// ];
