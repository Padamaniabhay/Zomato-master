import React from 'react'
import { TiStar } from "react-icons/ti"

const MenuSimilarRestauranrCard = (props) => {
    return (
        <>
           <div className='mx-2'>
           <div className="bg-white shadow rounded">
                <div className="w-full h-48">
                    <img
                        src={props.image}
                        alt="food"
                        className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div className='flex flex-col gap-2 p-3'>
                    <h3 className="text-lg my-1 font-semibold">{props.title}</h3>
                    <div className='flex items-center text-sm justify-between'>
                        <span className='flex items-center gap-1'>
                            <span className='flex items-center gap-1 bg-green-700 text-white py-1 px-2 rounded'>3.9 <TiStar /></span>
                            Dining
                        </span>
                        <span className='w-2 h-6 border-r border-gray-500'/>
                        <span className='flex items-center gap-1'>
                            <span className='flex items-center gap-1 bg-green-700 text-white  py-1 px-2 rounded'>4.1 <TiStar /></span>
                            Delivery
                        </span>
                    </div>
                    <h4>Fast Food, Italian, Pizza</h4>
                </div>
            </div>
           </div>
        </>
    )
}

export default MenuSimilarRestauranrCard
