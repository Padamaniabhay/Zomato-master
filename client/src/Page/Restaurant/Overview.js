import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropright } from "react-icons/io"
import Slider from 'react-slick'
import { useSelector, useDispatch } from "react-redux"
import ReactStars from "react-rating-stars-component";



//components
import MenuCollection from '../../Components/restaurant/MenuCollection'
import MenuSimilarRestauranrCard from '../../Components/restaurant/MenuSimilarRestauranrCard'
import { PrevArrow, NextArrow } from '../../Components/Delivery/CarousalArrow'
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';

import { getImage } from '../../Redux/Reducer/Image/Image.action'
import { getReviews } from '../../Redux/Reducer/Reviews/Review.action'


const Overview = () => {
    const { id } = useParams();

    const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);

    const [menuImages, setMenuImages] = useState({ images: [] })
    const [Reviews, setReviews] = useState([])


    const dispatch = useDispatch();
    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });

            dispatch(getReviews(reduxState?._id)).then(data=>setReviews(data.payload.reviews))

        }
    }, [])


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return (mapAddress?.split(",").map((item) => (parseFloat(item))));
    };

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12 mx-8 bg-white">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
                    <div className='flex justify-between items-center'>
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-3 my-4'>
                        <MenuCollection menuTitle="Menu" pages="3" image={menuImages} />
                    </div>
                    <h4 className="text-lg font-medium my-2">Cuisine</h4>
                    <div className='flex flex-wrap gap-2'>
                        {
                            reduxState?.cuisine.map((data) => (
                                <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>{data}</span>

                            ))
                        }
                    </div>
                    <div className='my-4'>
                        <h4 className="text-lg font-medium ">Average Cost</h4>
                        <h6>₹{reduxState?.averageCost} for two people (approx.)</h6>
                        <small className='text-gray-500'>Exclusive of applicable taxes and charges, if any</small>
                    </div>

                    <div className='my-4'>
                        <h4 className="text-lg font-medium ">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                            <MenuSimilarRestauranrCard image="https://b.zmtcdn.com/data/pictures/chains/0/19506590/a5fb673be35ce30c00767bc41bab6936_featured_v2.jpg?output-format=webp" title="London Yard Pizza" />
                        </Slider>
                    </div>
                    <div className='my-4'>
                        <h4 className="text-lg font-medium my-2">Rate your experience for</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        {Reviews.map((reviewData)=><ReviewCard  {...reviewData}/>)}
                    </div>
                    <div className="my-4 w-full  md:hidden flex flex-col gap-4">
                        <Mapview
                            title={reduxState?.name}
                            phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatLong(reduxState?.mapLocation)}
                            address={reduxState?.address}
                        />
                    </div>
                    <div className='my-4 flex flex-col gap-4'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>

                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md flex flex-col gap-4">

                    <Mapview
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                </aside>
            </div>
        </>
    )
}

export default Overview
