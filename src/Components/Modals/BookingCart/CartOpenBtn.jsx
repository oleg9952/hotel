import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../store/actions/bookingActions'
import './BookingCart.css'

const CartOpenBtn = () => {
    const { cart } = useSelector(state => state.bookingReducers)
    const dispatch = useDispatch()

    return (
        <div className={`cart_open ${cart.length === 0 ? 'hide' : ''}`}
            onClick={() => dispatch(toggleCart())}
        >
            <div className="cart_counter">{ cart.length }</div>
            <i className="fas fa-shopping-cart"></i>
        </div>
    )
}

export default CartOpenBtn
