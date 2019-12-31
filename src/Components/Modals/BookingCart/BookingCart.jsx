import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../../store/actions/bookingActions'
import OverviewItem from './OverviewItem'
import './BookingCart.css'

const BookingCart = (props) => {
    const cart = props.cart
    const dispatch = useDispatch()
    const { cartToggle } = useSelector(state => state.bookingReducers)

    let totalPrice = 0

    for(let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price
    }

    return (
        <div className={`booking_cart ${cartToggle ? 'active' : ''}`}>
            <div className="cart_close"
                onClick={() => dispatch(toggleCart())}
            >
                <div></div>
                <div></div>
            </div>
            <h2 className="cart_title">Your booking overview</h2>
            <div className="cart_overview">
                {
                    cart.length !== 0 ?
                    cart.map(room => (
                        <OverviewItem 
                            key={room.id}
                            room={room}
                        />
                    )) : (
                        <h2>You haven't chosen anything yet!</h2>
                    )
                }
                <div className="overview_item final">
                    <div className="final_holder">
                        <p>Total Price</p>
                        <p>${ totalPrice }</p>
                    </div>
                </div>
                <div className="overview_item confirmation">
                    <button className="confirmation_btn">Confirmation</button>
                </div>
            </div>
            <h2 className="cart_title">Confirm your reservation</h2>
            <div className="cart_confirmation">
                <div className="confirmation_inputs">
                    <input 
                        type="text" 
                        name="first_name"
                        placeholder="First Name"
                    />
                    <input 
                        type="text" 
                        name="last_name"
                        placeholder="Last Name"
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address"
                    />
                    <input 
                        type="tel" 
                        name="phone_number" 
                        placeholder="Phone Number"
                    />
                    <input 
                        type="text" 
                        name="country"
                        placeholder="Country"
                    />
                    <input 
                        type="number" 
                        name="zip_code"
                        placeholder="Zip Code"
                    />
                </div>
                <textarea name="order_notes" placeholder="Order Notes"></textarea>
                <div className="payment_options">
                    <div className="option">
                        <label>
                            <input type="radio" name="payment" />
                            <span>Payment directly at Hotel</span>
                        </label>
                    </div>
                    <div className="option">
                        <label>
                            <input type="radio" name="payment" />
                            <span>Payment online</span>
                        </label>
                    </div>
                </div>
                <button className="confirmation_btn">Confirmation</button>
            </div>
        </div>
    )
}

export default BookingCart
