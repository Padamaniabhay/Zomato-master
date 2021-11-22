import React,{useState} from 'react';
import Slider from 'react-slick';

//component
import NutritionHeroCarousalCard from './NutritionHeroCarousalCard';
import { PrevArrow,NextArrow } from '../Delivery/CarousalArrow';

const NutritionCarousal = () => {

    const [heroBanners,setHeroBanners] = useState([
           "https://b.zmtcdn.com/data/pictures/4/19766634/0f26c154da83739f569c45621f294d35.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
           "https://b.zmtcdn.com/data/pictures/3/57833/3b114e6a1bf736c42c7f6a3cc629c060_featured_v2.jpg?output-format=webp",
           "https://b.zmtcdn.com/data/pictures/chains/3/56603/7c33782f93fcfb8998a2e401dfa52416_featured_v2.jpg?output-format=webp",
           "https://b.zmtcdn.com/data/pictures/chains/9/19085099/049b3b3a20bac2bf151bbb62859e0f29_featured_v2.jpg?output-format=webp"
        ]);
    

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };
    return (
        <>
            <Slider {...settings}>
                {
                    heroBanners.map((image)=>(
                        <NutritionHeroCarousalCard image={image}/>
                    ))
                }
            </Slider>
        </>
    )
}

export default NutritionCarousal
