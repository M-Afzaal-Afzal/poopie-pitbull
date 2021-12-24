import React from 'react'

function Footer() {
    return (
        <div className=" flex flex-col bg-black-default py-8">
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center w-4/5 m-auto py-8 px-12 rounded-lg bg-gradient-to-r from-gradFrom to-gradTo' >
                 <div className='flex justify-center items-center' >
                     <img src="./images/FooterText.png" alt="" />
                 </div>
                 <div className='flex justify-center items-center' >
                     <img src="./images/arrow.png" alt="" />
                 </div>
                 <div className='flex justify-center items-center' >
                     <a href=""><img src="./images/discord.png" alt="" /></a>
                 </div>
            </div>
            <div className=' mt-16 grid grid-cols-1 md:grid-cols-3 px-4 gap-4 place-items-center md:place-items-start justify-evenly items-center' >
                <p className='text-white-light text-lg' >Poopie Pitbull NFT © 2021 </p>
                <a className='text-white-light text-lg' target={"_blank"} href="">Terms & conditions</a>
                <div className='flex' >
                    <a href=""><img className='m-2' src="./images/discord-fill.png" alt="" /></a>
                    <a href=""><img className='m-2' src="./images/twitter-fill.png" alt="" /></a>
                    <a href=""><img className='m-2' src="./images/facebook-fill.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
