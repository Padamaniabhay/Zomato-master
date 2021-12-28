import React from 'react'

const FoodItem = (props) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h5>{props.name}</h5>
                <div className='flex flex-col items-end'>
                    <small> ₹{parseInt
                    (props.price)*parseInt(props.quantity)}</small>
                    <div className='bg-zomato-400 text-white rounded flex items-center gap-1 px-1'>
                        <button className='bg-zomato-400 text-white rounded p-1'>-</button>
                        <small>38</small>
                        <button className='bg-zomato-400 text-white rounded p-1' >+</button>
                    </div>
                </div>
            </div>
            <hr className='my-1'/>
        </>
    )
}

export default FoodItem
