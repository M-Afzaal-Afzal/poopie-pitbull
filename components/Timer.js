import React from "react";
import {useTimer} from "react-timer-hook";
import Image from "next/image";

function Timer({expiryTimestamp}) {
    const {seconds, minutes, hours, days} = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });

    const formatNum = (num) => num > 9  ? num : `0${num}`;

    return (
        <div className="mb-7 ">
            <div style={{
                gridTemplateColumns: ' repeat(4, minmax(5rem, 1fr))',
                maxWidth: '30rem',
            }} className="grid place-items-center overflow-x-scroll gap-8 md:overflow-x-auto justify-start md:px-5 py-6">
                <div className="flex-col relative w-20 mx-5 flex">
                    <div className={'relative'}>
                        <Image src="/images/timer-bg.png" alt="" width={100} height={100}/>
                        <span className=" middle font-bold text-2xl md:text-5xl">
                        {formatNum(days)}
                            {/*11*/}
                        </span>
                    </div>
                    <div className={'text-white-light mt-2 text-center text-2xl font-bold'}>
                        Days
                    </div>
                </div>

                <div className="flex-col w-20 relative mx-5 flex">
                    <div className={'relative'}>
                        <Image src="/images/timer-bg.png" alt="" width={100} height={100}/>
                        <span className=" middle font-bold text-2xl md:text-5xl">
                        {formatNum(hours)}
                            {/*11*/}
                        </span>
                    </div>
                    <div className={'text-white-light mt-2 text-center text-2xl font-bold'}>
                        Hours
                    </div>
                </div>

                <div className="flex-col w-20 relative mx-5 flex">
                    <div className={'relative'}>
                        <Image src="/images/timer-bg.png" alt="" width={100} height={100}/>
                        <span className=" middle font-bold text-2xl md:text-5xl">
                        {formatNum(minutes)}
                            {/*11*/}
                        </span>
                    </div>
                    <div className={'text-white-light mt-2 text-center text-2xl font-bold'}>
                        Mins
                    </div>
                </div>

                <div className="flex-col w-20 relative mx-5 flex">
                    <div className={'relative'}>
                        <Image src="/images/timer-bg.png" alt="" width={100} height={100}/>
                        <span className=" middle font-bold text-2xl md:text-5xl">
                        {seconds}
                            {/*11*/}
                        </span>
                    </div>
                    <div className={'mt-2 text-white-light text-center text-2xl font-bold'}>
                        Sec
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Timer;
