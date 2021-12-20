import React from 'react'
import { TiStar } from 'react-icons/ti'

const reviewCard = () => {
    return (
        <>
            <div className=' my-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-8 rounded-full'>
                            <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                                alt="avatar"
                                className='w-full h-full rounded-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Abhay Padamani</h3>
                            <small className='txt-gray-500'>5 Reviews &#8226; 3 follwers</small>
                        </div>
                    </div>
                    <button className='text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg'>Follow</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span className='text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1'>4 <TiStar /></span>
                        <h5 className='font-regular uppercase '>Delivery</h5>
                        <small className='text-gray-500'>3 days ago</small>
                    </div>
                    <div className='w-full'>
                        <p className='w-full text-gray-600 font-light text-base'>
                            The food was amazing and delicious and packing as you can see they have their own package with wooden spoon , mukhvas, and everything was seal tight and spill proof.
                            Ordered paneer biryani as a try and it was delicious. I received gulabjamun and rayta in addition. Everything in it was delicious.
                            Go for it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default reviewCard
