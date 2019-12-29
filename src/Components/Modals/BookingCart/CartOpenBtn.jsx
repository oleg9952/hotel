import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../../store/actions/bookingActions'
import './BookingCart.css'

const CartOpenBtn = () => {
    const dispatch = useDispatch()

    return (
        <div className="cart_open"
            onClick={() => dispatch(toggleCart())}
        >
            <i className="fas fa-shopping-cart"></i>
        </div>
    )
}

export default CartOpenBtn
