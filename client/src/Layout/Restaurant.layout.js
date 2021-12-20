import React from 'react';
import {TiStarOutline} from "react-icons/ti"
import {RiDirectionLine,RiShareForwardLine} from "react-icons/ri"
import {BiBookmarkPlus} from "react-icons/bi"

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar"
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';

const RestaurantLayout = (props) => {
    return (
        <>
            <RestaurantNavbar/>
           <div className="container mx-auto px-4 lg:px-32 ">
                <ImageGrid images={["https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg",
                "https://b.zmtcdn.com/data/pictures/chains/1/19708611/364c47169e854c8b24f2e4d3784f4384.jpg"]}
                />
               <RestaurantInfo 
               name="La Milano Pizzeria" 
               restaurantrating="3.5" 
               deliveryrating="3.2" 
               cuisine="Pizza, Fast Food" 
               address="Bapunagar, Ahmedabad"/>
               <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline/> Add Reviews
                    </InfoButtons>
                    <InfoButtons >
                        <RiDirectionLine/> Direction
                    </InfoButtons>
                    <InfoButtons >
                        <BiBookmarkPlus/> Bookmark
                    </InfoButtons>
                    <InfoButtons >
                        <RiShareForwardLine/> Share
                    </InfoButtons>
               </div>
               <div className="my-10">
                   <TabContainer/>
               </div>
               <div>
                   {props.children}
               </div>
           </div> 
        </>
    )
}

export default RestaurantLayout;
