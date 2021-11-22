import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const MobileNav = ()=>{
    return(
        <>
            <div className="flex items-center justify-between w-full lg:hidden">
                <AiOutlineArrowLeft/>
                <div className="w-28">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt="logo"
                        className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                        <span className="border p-2 border-gray-300 text-zomato-400 rounded-full"><FaUserAlt/></span>
                    </div>
            </div>
        </>
    );
};


const LargeNav = ()=>{
    return (
        <>
        <div className="hidden lg:inline container px-20 mx-auto">  
            <div className="hidden gap-4 items-center w-full justify-between lg:flex px-4 ">
                <div className="lg:w-3/4 flex gap-4 items-center w-full justify-between">
                <div className="w-28 ">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt="logo"
                        className="w-full h-full"
                        />
                </div>
                <div className="w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker/>
                        </span>
                        <input type="text" placeholder="Rajkot" className="focus:outline-none"/>
                        <span>
                            <IoMdArrowDropdown/>
                        </span>
                    </div>
                    <div className="flex w-full items-center gap-2 ">
                        <span>
                            <RiSearch2Line/>
                        </span>
                        <input type="search" placeholder="Search for restaurant, cuisine or a dish" className="w-full focus:outline-none"/>
                    </div>
                </div>
                </div>
                <div className="ml-64 flex gap-4">
                    <button className="text-gray-500 hover:text-gray-800 text-xl ">Login</button>
                    <button className="text-gray-500 hover:text-gray-800 text-xl">SignUp</button>
                </div>
            </div>
        </div>
        </>
    )
}


const Navbar =()=>{
    return(
        <>
            <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
                <MobileNav/>
                <LargeNav/>
            </nav>
            
        </>
    )
};



export default Navbar;
