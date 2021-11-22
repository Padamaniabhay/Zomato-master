import React from 'react';
import Slider from 'react-slick';

//components
import NutritionCarousalCard from './NutritionCarousalCard';
import { NextArrow,PrevArrow } from '../Delivery/CarousalArrow';


const categories =[
    {
    image:"https://images-platform.99static.com//w8y55sO5NSICDqlRgJXRwpH5pZE=/76x0:925x849/fit-in/500x500/99designs-contests-attachments/46/46321/attachment_46321908",
    title:"Astaxanthin"
},
    {
    image:"https://images-platform.99static.com//nThNh5gdz_WcAlIh98TnPr7MQZE=/0x182:2000x2182/fit-in/590x590/99designs-contests-attachments/89/89368/attachment_89368553",
    title:"Sweep"
},
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jYmJUNNfsnXZ6UDj0R0O1xlpP_7x3R6NQ1oGBCRABOvDrhzyUAd4suOMIjHolpgHOYc&usqp=CAU",
    title:"Laxity"
},
    {
    image:"https://image.shutterstock.com/image-vector/bottle-label-package-template-design-260nw-1237369045.jpg",
    title:"brand"
},
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxG5Jd-FBPEZJKThZ11B31kM9nOa3wRRXw4CpcZtTh1hnZWmp7mRcJhX2r0d-iz_Vfg0Q&usqp=CAU",
    title:"Natural Vitamin C"
},
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1nBEgwW6owqjzOxogSwN8VK1_oci_NutCeorHxSZEwyZBQ0PxIwLVWhWCmyyBpwfuTM&usqp=CAU",
    title:"Natural Vitamin C"
}

]

const NutritionCarousal = () => {
      
const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

    return (
        <>
        <div className="lg:hidden flex flex-wrap gap-3lg:gap-0 justify-between">
        {
                categories.map((food)=>(
                    <NutritionCarousalCard {...food}/>
                )
                )
            }
        </div>
        <div className="hidden lg:block">
            <Slider {...settings}>
            {
                categories.map((food)=>(
                    <NutritionCarousalCard {...food}/>
                )
                )
            }
            </Slider>
        </div>
        </>
    )
}

export default NutritionCarousal
