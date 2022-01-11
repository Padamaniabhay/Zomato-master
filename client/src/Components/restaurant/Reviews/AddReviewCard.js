import React, { useState } from 'react'

//components
import ReviewModel from './ReviewModel'

const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);


    const openModel = () => {
        if(!localStorage.zomatoUser) {
            return alert("please sign in to post a review")
        }
        setIsOpen(true);
    }
    return (
        <>
            <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen} />
            <h3 className='text-xl font-medium'>Rate your experience for</h3>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                    <input type="radio" name="review" id='dining' />
                    <label htmlFor='dining'>Dining</label><label />
                </div>
                <div className='flex items-center gap-2'>
                    <input type="radio" name="review" id='delivery' />
                    <label htmlFor='delivery'>Delivery</label><label />
                </div>
            </div>
            <button onClick={openModel} className='text-zomato-400'>Write a review</button>
        </>
    )
}

export default AddReviewCard
