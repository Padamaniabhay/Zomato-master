import React from 'react';

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar"

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar/>
           <div className="container mx-auto px-4 lg:px-20">
                <div className="w-full h-60 md:hidden rounded-lg">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                        alt="restaurant image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="hidden w-full h-80 md:flex gap-1">
                    <div className="w-7/12 h-full overflow-hidden">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                            alt="restaurant image"
                            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                        />  
                    </div>
                    <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                            alt="restaurant image"
                            className="w-full h-40 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                        />  
                        <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                            alt="restaurant image"
                            className="w-full h-40 object-cover rounded-lg  transform transition duration-700 hover:scale-110 "
                        />  
                    </div>
                    <div className="w-1/6 h-full flex flex-col gap-1 overflow-hidden">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                            alt="restaurant image"
                            className="w-full h-40 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                        />  
                        <img src="https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"
                            alt="restaurant image"
                            className="w-full h-40 object-cover rounded-lg  transform transition duration-700 hover:scale-110 "
                        />  
                    </div>
                </div>
           </div> 
        </>
    )
}

export default RestaurantLayout
