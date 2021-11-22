import React from "react";
import Slider from "react-slick";
//components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow,PrevArrow } from "./CarousalArrow";


const categories =[{
    image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    title:"Dosa"
},{
    image:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    title:"Idli"
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
    title:"Vada"
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    title:"Sandwich"
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    title:"Paratha"
},
{
    image:"https://b.zmtcdn.com/data/dish_images/871cad3547d3906132eb453a0c75690c1629122101.png",
    title:"Sagu"
},
{
    image:"https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png",
    title:"Tea"
},
{
    image:"https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
    title:"coffee"
},
{
    image:"https://b.zmtcdn.com/data/dish_images/76337f566ed166fad8a5ad6b5e29d75b1634805122.png",
    title:"Juice"
}

]


const DeliveryCarousal = () =>{
    
const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

    return <>
        <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
        <div className="lg:hidden flex flex-wrap gap-3 justify-between">
        {
                categories.map((food)=>(
                    <DeliveryCategory {...food}/>
                )
                )
            }
        </div>
        <div className="hidden lg:block">
            <Slider {...settings}>
            {
                categories.map((food)=>(
                    <DeliveryCategory {...food}/>
                )
                )
            }
            </Slider>
        </div>
    </>
}

export default DeliveryCarousal;