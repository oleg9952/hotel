import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart, confirmBooking } from '../../../store/actions/bookingActions'
import { fireNotification } from '../../../store/actions/authActions'
import OverviewItem from './OverviewItem'
import './BookingCart.css'

const BookingCart = (props) => {
    const cart = props.cart
    const dispatch = useDispatch()
    const { cartToggle } = useSelector(state => state.bookingReducers)
    const { authorized, user } = useSelector(state => state.authReducers)

    const calcTotalPrice = cart => {
        let counter = 0
        cart.forEach(item => counter += item.price)
        return counter
    }

    //------- BOOKING CONFIRMATION ------- 
    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let country = useRef(null)

    let phoneNumber = useRef(null)
    let zipCode = useRef(null)
    let notes = useRef(null)

    const handleConfirmation = e => {
        e.preventDefault()

        let inputs = [
            firstName,
            lastName,
            email,
            country,
            phoneNumber,
            zipCode,
            notes
        ]
     
        if(authorized) {
            let booking = {
                uid: user.uid,
                bookingID: Math.floor(Math.random() * (9000 - 1000)) + 1000,
                total: calcTotalPrice(cart),
            }

            dispatch(confirmBooking(booking, cart))
            dispatch(fireNotification('book'))
        } else {
            alert('Sign in to be able to book rooms!')
            inputs.forEach(input => input.current.value = null)
        }
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
                        <p>${ calcTotalPrice(cart) }</p>
                    </div>
                </div>
                {
                    authorized ? (
                        <div className="overview_item confirmation">
                            {
                                cart.length !== 0 ? (
                                    <button className="confirmation_btn"
                                        onClick={handleConfirmation}
                                    >Confirmation</button>
                                ) : ''
                            }
                        </div>
                    ) : ''
                }
                
            </div>

            {
                !authorized ? (
                    <>
                    <h2 className="cart_title">Confirm your reservation</h2>
                    <form className="cart_confirmation" onSubmit={handleConfirmation}>
                        <div className="confirmation_inputs">
                            <input 
                                type="text" 
                                name="first_name"
                                placeholder="First Name"
                                ref={firstName}
                            />
                            <input 
                                type="text" 
                                name="last_name"
                                placeholder="Last Name"
                                ref={lastName}
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email Address"
                                ref={email}
                            />
                            <input 
                                type="tel" 
                                name="phone_number" 
                                placeholder="Phone Number"
                                ref={phoneNumber}
                            />
                            <input 
                                type="text" 
                                name="country"
                                placeholder="Country"
                                ref={country}
                            />
                            <input 
                                type="number" 
                                name="zip_code"
                                placeholder="Zip Code"
                                ref={zipCode}
                            />
                        </div>
                        <textarea name="order_notes" placeholder="Order Notes"
                            ref={notes}
                        ></textarea>
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
                    </form>
                    </>
                ) : ''
            }

            
        </div>
    )
}

export default BookingCart
