import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";



const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const reduxState = useSelector((globslStore) => globslStore.restaurant.restaurants)
    // console.log(reduxState);

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants])
    return <>
        <DeliveryCarousal />
        <div className="mb-14" />
        <Brand />
        <div className="mb-14" />
        <div className="flex justify-items-start flex-wrap">
            {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id} />
            ))}
        </div>
    </>
}

export default Delivery;