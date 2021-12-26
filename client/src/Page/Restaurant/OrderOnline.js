import React from 'react'
import { AiOutlineCompass } from "react-icons/ai"
import { BiTimeFive } from 'react-icons/bi'
//components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer'
import FoodList from '../../Components/restaurant/Order-Online/FoodList'

const OrderOnline = () => {
    return (
        <>
            <div className='w-full flex '>
                <aside className='hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4'>
                    <MenuListContainer />
                </aside>
                <div className='w-full h-screen px-3 md:w-3/4'>
                    <div className='pl-3 mb-4'>
                        <h2 className='text-xl font-semibold'>Order Online</h2>
                        <h4 className='flex items-center gap-2 font-light text-gray-500'><AiOutlineCompass />Live track your order |<BiTimeFive/>45 min</h4>

                    </div>
                    <section className='flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5'>
                        <FoodList title="Recommended" items={[{
                            image: "https://b.zmtcdn.com/data/dish_photos/9c7/b2ae1e402f9a462d9349561971b419c7.jpg",
                            price: "1000",
                            rating: 3,
                            description: "Veniam ullamco minim incididunt esse reprehenderit labore laboris voluptate deserunt culpa. Deserunt excepteur quis est eiusmod pariatur cillum pariatur consequat. Anim nostrud adipisicing labore ut consequat. Sunt pariatur aliqua duis non ad laboris eu incididunt adipisicing pariatur quis. Ad laborum Lorem nisi deserunt reprehenderit dolor esse dolore ea culpa.",
                            title: "Margharita Pizza (regular)"
                        },
                        ]}
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline
