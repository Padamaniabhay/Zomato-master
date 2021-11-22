import React from 'react';
import {BsStarHalf,BsStar, BsStarFill} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
    return (
        <>
           <div className="p-4 w-full md:w-1/2 lg:w-1/3">
               <div className="w-full h-full bg-white shadow-lg rounded-2xl pb-4">
               <div className={`w-full h-56 bg-${props.bg}-100 rounded-t-2xl`}>
                   <img src={props.image} 
                   alt="suplimets"
                    className="w-full h-full"
                   />
               </div>
                <div className="p-3 flex flex-col gap-3">
                <div className="flex mt-2 items-center gap-3">
                    <div className="w-4 h-4">
                    <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" 
                    alt="veg"
                    className="w-full h-full object-cover"/>
                    </div>
                    <ReactStars
                            count={5}
                            //onChange={ratingChanged}
                            size={18}
                            isHalf={true}
                            value={3.5}
                            emptyIcon={<BsStar/>}
                            halfIcon={<BsStarHalf/>}
                            fullIcon={<BsStarFill/>}
                            activeColor="#ffd700"
                        />
                <span className="text-gray-400">15</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700">Burn - Weight Balanace</h3>
                <p className="text-sm font-light text-gray-400">This formula with VFill™ technology will help improve metabolism and support fat burn.</p>
                </div> 
               <div className="mt-4">
               <hr/>
               </div>
               <div className="px-4">
                  <span>
                        <s className="text-gray-300 font-light mr-3">₹600</s>
                        <strong>₹320</strong>
                  </span>
                  <p>Monthly pack - 30 capsules</p>
               </div>
               </div>
           </div>
        </>
    )
}

export default NutritionCard;
