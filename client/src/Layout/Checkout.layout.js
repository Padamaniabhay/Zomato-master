import React from 'react'

//components
import Navbar from '../Components/Navbar/CheckoutNavbar'

const CheckoutLayout = (props) => {
    return (
        <>
        <Navbar/>
        <div className='container px-4 lg:px-20 mx-auto'>
            {props.children}
        </div>
            
        </>
    )
}

export default CheckoutLayout