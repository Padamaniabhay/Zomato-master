import React from 'react';

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar"
import ImageGrid from '../Components/restaurant/ImageGrid';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar/>
           <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid images={["https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"]}/>
           </div> 
        </>
    )
}

export default RestaurantLayout;
