import React from 'react'
import {IoMdArrowDropright} from "react-icons/io"

const PictureCarousalCard = () => {
    return (
        <>
            <div className="w-full px-4 h-64 relative rounded-lg">
               <div className="w-full h-full relative">
               <img src="https://b.zmtcdn.com/data/pictures/6/18749716/568aa5aa645d42e1cbcd5d3cf2921082.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    alt="food"
                    className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                />
                    <div
                    className="w-full h-full absolute inset-0 rounded-lg"
                     style={{
                         background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
                         }}/>
               </div>
                <div className="absolute w-full bottom-2 pl-4 text-white rounded-lg">
                    <h4 className="z-10">Best of Ahmedabad</h4>
                    <h6 className="z-10 flex items-center">42 Place(s)<IoMdArrowDropright/></h6>
                </div>
            </div>
            
        </>
    )
}

export default PictureCarousalCard
