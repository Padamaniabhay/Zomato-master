import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TiStarOutline } from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri"
import { BiBookmarkPlus } from "react-icons/bi"


//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar"
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

//Redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/Restaurant/Restaurant.action';
import { getImage } from '../Redux/Reducer/Image/Image.action';


const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({ images: [], name: "", cuisine: "", address: "" });



    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            // console.log(data);
            setRestaurant((prev) => ({ ...prev,...data.payload.restaurant}))

            dispatch(getImage(data.payload.restaurant.photos)).then((data) => setRestaurant((prev) => {
                return ({ ...prev, ...data.payload.images });
            }));

            dispatch(getImage(data.payload.restaurant.photos)).then(data=>setRestaurant(prev=>({...prev,...data.payload.image})))

        });
    },[])
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-32 ">
                <ImageGrid images={restaurant.images}
                />
                <RestaurantInfo                                         //here ? mark means if restaurant is available then go for name,rating....
                    name={restaurant?.name}                                 //same as restaurant && restaursnt.name
                    restaurantrating={restaurant?.rating || 0}
                    deliveryrating={restaurant?.rating || 0}
                    cuisine={restaurant?.cuisine}
                    address={restaurant?.address} />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Reviews
                    </InfoButtons>
                    <InfoButtons >
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons >
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons >
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer />
                </div>
                <div>
                    {props.children}
                </div>
            </div>
            <CartContainer />
        </>
    )
}

export default RestaurantLayout;
