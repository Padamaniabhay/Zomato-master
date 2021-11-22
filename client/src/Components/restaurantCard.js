import React from "react";
import {AiTwotoneStar} from "react-icons/ai"

const restaurantCard = (props) => {
    return (
        <>
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white p-4 hover:shadow-lg transitions duration-700 ease-in-out rounded-2xl  mb-4">
                <div className="w-full h-56 lg:h-64 relative">
                    <div className="absolute w-full bottom-4 flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start">
                            {
                                props.isPro &&(<span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% OFF</span>)
                            }
                            {
                                props.isOff && (<span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{`₹ ${props.isOff} OFF`}</span>)
                            }
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-3">{props.durationoffdelivery} min</span>
                    </div>
                    <img src={props.photos.length && props.photos[0]}
                        alt="food"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center mr-3">{props.restaurantReviewValue}<AiTwotoneStar/></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹{props.averageCost} for one</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default restaurantCard;
