import React from "react";
import { Fade } from "react-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <div className=" flex flex-col bg-black-default px-4 md:px-8 lg:px-16 lg:py-40 md:py-12 py-8">
      <Fade bottom>
        <h1 className="head head-specs relative text-white-light text-3xl md:text-5xl pb-2 font-semibold md:font-extrabold pt-4">
          Frequently Asked Questions
        </h1>
        </Fade>
        <Fade bottom>
        <div className=" m-auto mt-32 ">
          <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} className="bg-black-default text-white-light">
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                    What is an NFT and how can I buy it?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
            <AccordionItem className="  py-10 ">
              <AccordionItemHeading>
                <AccordionItemButton className="justify-center  m-auto flex items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                  When is public minting and at what price?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                  How can I check rarity of my Poopie Pitbull?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                  Will I have commercial rights over my Poopie Pitbull?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
            <AccordionItem className="  py-10  ">
              <AccordionItemHeading>
                <AccordionItemButton className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                  How can I be entered into the raffles?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
            <AccordionItem className="  py-10 ">
              <AccordionItemHeading>
                <AccordionItemButton className="m-auto flex justify-center items-center bg-black-default text-white-light">
                  <p className="text-xl mr-8 text-center">
                  Can I choose which pitbull shelter to donate to?
                  </p>
                  <img src="./images/arrowDown.png" alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={'p-0 pt-8'}>
                <p className={'text-center'}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
              <img className="mt-16" src="./images/Line.png" alt="" />
            </AccordionItem>
          </Accordion>
        </div>
        </Fade>
    </div>
  );
}

export default FAQ;
