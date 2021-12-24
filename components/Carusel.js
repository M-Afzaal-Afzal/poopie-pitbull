import React, {useRef} from "react";
import Slider from "react-slick";

const Carusel = () => {
    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <div className="relative">
            <button className=" absolute left-3 top-[50%] slider-btn z-10 md:block" onClick={previous}>
                <img src="/images/leftArrow.png" alt=""/>
            </button>

            <Slider ref={c => (slider.current = c)} {...sliderSettings}>

                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.sliderImage} alt="" className='w-full'/>
                        </div>
                    );
                })}
                {/*<div style={{*/}
                {/*    zIndex: -1,*/}
                {/*    transform: 'translate(-50%,-50%)',*/}
                {/*}} className={'absolute top-[50%] left-[50%] object-center'}>*/}
                {/*    <img src={'/images/slider-bg.png'} alt="" className='w-full'/>*/}
                {/*</div>*/}
            </Slider>

            <button className=" absolute right-3 slider-btn top-[50%] z-10 md:block" onClick={next}>
                <img src="/images/rightArrow.png" alt=""/>
            </button>
        </div>
    );
};

export default Carusel;

const data = [
    // {
    //     sliderImage: "/images/slider-bg.png",
    // },
    {
        sliderImage: "/images/1.png",
    },{
        sliderImage: "/images/2.png",
    },{
        sliderImage: "/images/3.png",
    },{
        sliderImage: "/images/4.png",
    },{
        sliderImage: "/images/5.png",
    },{
        sliderImage: "/images/6.png",
    },{
        sliderImage: "/images/7.png",
    },
    {
        sliderImage: "/images/8.png",
    }
];
