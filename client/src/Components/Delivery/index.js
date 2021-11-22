import React,{useState} from "react";



//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";



const Delivery = () =>{
    const [restaurantList,setRestaurantList] = useState([
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/pictures/4/19076594/1a2e5d6719735cdd14d67b6ad357fd2d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"The Fusion Pizza",
            cuisine:["Pizza","Fast Food","Beverages"],
            averageCost:100,
            isPro:true,
            isOff:50,
            durationoffdelivery:47,
            restaurantReviewValue:4.2,    
    },
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/pictures/4/19076594/1a2e5d6719735cdd14d67b6ad357fd2d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"The Fusion Pizza",
            cuisine:["Pizza","Fast Food","Beverages"],
            averageCost:100,
            isPro:true,
            isOff:50,
            durationoffdelivery:47,
            restaurantReviewValue:4.2,    
    },
        {
            _id:"123456-2",
            photos:["https://b.zmtcdn.com/data/pictures/chains/0/18704290/62b798b1a42b73ecfb70981b244a7733.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
            name:"Gondal Gathiya",
            cuisine:["Street Food"],
            averageCost:456,
            isPro:false,
            isOff:60,
            durationoffdelivery:30,
            restaurantReviewValue:4.7,    
    }
    ]);
    return <>
        <DeliveryCarousal/>
        <div className="mb-14"/>
        <Brand/>
        <div className="mb-14"/>
        <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant)=>(
            <RestaurantCard {...restaurant} key={restaurant._id}/>
        ))}
        </div>
    </>
}

export default Delivery;