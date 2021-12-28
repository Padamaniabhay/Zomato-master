import React from 'react'
import {BsFillShieldLockFill} from "react-icons/bs"
//components
import FoodItem from '../Components/Cart/FoodItem'
import AddresList from '../Components/Checkout/AddressList'

const Checkout = () => {
    const address = [
        {
            name: "Home",
            address: "India"
        },
        {
            name: "gym",
            address: "India"
        },
        {
            name: "college",
            address: "India"
        },
        {
            name: "office",
            address: "India"
        }]
    return (
        <>
            <div className='flex flex-col gap-3 my-3 items-center'>
                <h1 className='text-xl text-center md:text-2xl font-bold'>Checkout</h1>
                <div className='w-full md:w-3/5 rounded-lg shadow-lg bg-white py-3 flex flex-col items-center'>
                    <h3 className='text-lg font-semibold'>Summary</h3>
                    <div className='flex w-full flex-col gap-2 items-center'>
                        <h5 className='text-base tracking-wider'>ORDER FROM</h5>
                        <div className='flex flex-col items-center text-gray-400'>
                            <h4>Domino's Pizza</h4>
                            <small>Bapunagar, Ahmedabad</small>
                        </div>
                        <div className='my-4 flex flex-col gap-2 w-full md:w-3/5 px-4'>
                            <FoodItem name="pizza" quantity={10} price={100} />
                            <FoodItem name="pizza" quantity={10} price={100} />
                            <FoodItem name="pizza" quantity={10} price={100} />
                            <FoodItem name="pizza" quantity={10} price={100} />
                            <FoodItem name="pizza" quantity={10} price={100} />
                        </div>
                        <div className='my-4 flex flex-col gap-3 w-full md:w-3/5'>
                        <h4 className='text-xl font-semibold'>Choose Address</h4>
                         <AddresList address={address}/>
                        </div>
                    </div>
                    <button className='my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg flex gap-2 justify-center items-center bg-zomato-400 rounded-lg'>Pay Securely <BsFillShieldLockFill/></button>
                </div>
            </div>
        </>
    )
}

export default Checkout
