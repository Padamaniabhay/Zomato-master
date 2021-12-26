import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"
import { MdClose } from "react-icons/md"

//components
import MenuListContainer from './MenuListContainer';

const FloatMenuBtn = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => {
        setIsClicked((prev) => !prev);
    }
    return (
        <>
            <div className='fixed z-30 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden'>
                {
                    isClicked && <div className='w-full bg-white p-3 h-48 overflow-y-scroll'><MenuListContainer /></div>
                }
                <button
                    onClick={toggleMenu}
                    className=' md:hidden text-white bg-yellow-900 flex items-center gap-2 px-3 py-2 rounded-full'>{isClicked ?<MdClose />:<HiMenu />}Menu</button>
            </div>
        </>
    )
}

export default FloatMenuBtn
