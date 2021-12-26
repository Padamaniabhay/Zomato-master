import React, { useState } from 'react'
import Rating from "react-rating-stars-component"
import AddReviewCard from '../../Components/restaurant/Reviews/AddReviewCard';
//components
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState(["", "", ""]);

    const handleRating=(value)=>{
        console.log(value);
    }
    return (
        <>
            <div className='w-full flex flex-col md:flex-row relative'>
            <div className='md:hidden'>
            <AddReviewCard/>

            </div>
                <div className='w-full md:w-8/12 flex flex-col gap-3'>
                    {
                        reviews.map((review) => <ReviewCard {...review} />)
                    }
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:flex md:items-start md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md flex-col gap-3">
                   <AddReviewCard/>
                </aside>
            </div>
        </>
    )
}

export default Reviews
