import React from "react";
import Slider from "react-slick";


//components
import { NextArrow,PrevArrow } from "./CarousalArrow";


const Brand = (props) => {
    const logos=[
        "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/2159c4a55b3ff2362678141e6a83645f_1622476257.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/878a69aaa88728f7073d1e3d13a5a047_1628324346.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/e233fa61fd1dfc0147109bd4eb0bd315_1513746862.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/4c0ad890a010ebed2a98520a45a1a222_1543210471.png?output-format=webp"
    ];
       
const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  };

    return (
        <>
        <Slider {...settings}>
            {logos.map((logo)=>(
                <div className="h-32 px-4">
                <div className="bg-white shadow-lg w-44 h-full rounded-lg">
                <img src={logo} alt="Brand" className="w-full h-full rounded-lg"/>
            </div>
                </div>
            ))}
        </Slider>
            
        </>
    )
}

export default Brand;
