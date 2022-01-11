import React from 'react'
import {AiOutlineCamera} from "react-icons/ai";

const ImageGrid = (props) => {
    return (
        <div>
            <div className="w-full h-60 md:hidden rounded-lg">
                    <img src={props.images.length && props.images[0].location}
                        alt="restaurant image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="hidden w-full h-96 md:flex gap-1">
                    <div className="w-full h-full overflow-hidden">
                        <img src={props.images.length && props.images[0].location}
                            alt="restaurant image"
                            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                        />  
                    </div>
                    <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={props.images.length>=1 && props.images[1].location}
                                alt="restaurant image"
                                className="w-full h-48 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                            />  
                        </div>
                        <div className="overflow-hidden">
                            <img src={props.images.length>=2 &&props.images[2].location}
                                alt="restaurant image"
                                className="w-full h-48 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                            />
                        </div>  
                    </div>
                    <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
                        <div className="overflow-hidden w-full h-full relative">
                            <img src={props.images.length>=3 &&props.images[3].location}
                                alt="restaurant image"
                                className="w-full h-48 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                            />  
                            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg"/>
                            <h4 className="absolute inset-y-1/2 text-white z-2 w-full h-full text-center font-semibold">View Gallery</h4>
                        </div>
                        <div className="overflow-hidden w-full h-full relative">
                            <img src={props.images.length>=4 && props.images[4].location}
                                alt="restaurant image"
                                className="w-full h-48 object-cover rounded-lg transform transition duration-700 hover:scale-110 "
                            />  
                            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg"/>
                            <div className="absolute inset-y-1/3 text-white z-2 w-full h-full text-center font-semibold flex flex-col items-center">
                                <div className="bg-black p-3 rounded-full bg-opacity-50">
                                <AiOutlineCamera/>
                                </div>
                                <h4 className="">Add Photos</h4>
                            </div>
                        </div>   
                    </div>
                </div>
        </div>
    )
}

export default ImageGrid;
