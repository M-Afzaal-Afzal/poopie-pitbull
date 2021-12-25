import React from "react";
import {Fade} from "react-reveal";
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
                    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}
                               className="bg-black-default text-white-light">
                        <AccordionItem className="  py-10  ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        What is an NFT and how can I buy it?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    NFT stands for non fungible tokens and it will be yours only as a unique digital
                                    asset that you can later sell for higher profits. To buy Poopie Pitbull NFT, you
                                    will first have to buy some Ethereum which you can get via a FIAT on-ramp service
                                    like Coinbase or PayPal. From there you can transfer Ethereum you just bought to
                                    your MetaMask wallet and buy your first NFT. For more detailed tutorials you can use
                                    YouTube to search for how you can buy Ethereum.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                        <AccordionItem className="  py-10 ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className="justify-center  m-auto flex items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        When is public minting and at what price?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    Public minting date is to be announced soon and price per Poopie Pitbull will be
                                    0.05 ETH.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                        <AccordionItem className="  py-10  ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        How can I check rarity of my Poopie Pitbull?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    Once Poopie Pitbull is revealed after public minting, all holders will be able to
                                    check their rarities from rarity checker channel on Discord or from Opensea
                                    properties of your Poopie Pitbull. Please note these rarities first need appear in
                                    your Opensea properties to be properly displayed in Discord rarity checker.
                                    Can I buy more than 1 Poopie Pitbull?
                                    Yes you can buy max 5 per transaction and a maximum of 15 per Ethereum wallet.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                        <AccordionItem className="  py-10  ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        Will I have commercial rights over my Poopie Pitbull?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    Yes! You’ll have full commercial rights over your Poopie Pitbull as long as you hold
                                    it.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                        <AccordionItem className="  py-10  ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className=" m-auto flex justify-center items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        How can I be entered into the raffles?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    You will automatically be entered into all the raffles once you purchase a Poopie
                                    Pitbull.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                        <AccordionItem className="  py-10 ">
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className="m-auto flex justify-center items-center bg-black-default text-white-light">
                                    <p className="text-xl mr-8 text-center">
                                        Can I choose which pitbull shelter to donate to?
                                    </p>
                                    <img src="./images/arrowDown.png" alt=""/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={'p-0 pt-8'}>
                                <p className={'text-center'}>
                                    Yes, there will be a voting poll in discord.
                                </p>
                            </AccordionItemPanel>
                            <img className="mt-16" src="./images/Line.png" alt=""/>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Fade>
        </div>
    );
}

export default FAQ;
