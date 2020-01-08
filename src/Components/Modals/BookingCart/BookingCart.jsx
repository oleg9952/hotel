import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart, confirmBooking } from '../../../store/actions/bookingActions'
import OverviewItem from './OverviewItem'
import './BookingCart.css'

const BookingCart = (props) => {
    const cart = props.cart
    const dispatch = useDispatch()
    const { cartToggle } = useSelector(state => state.bookingReducers)
    const { authorized } = useSelector(state => state.authReducers)


    let totalPrice = 0

    for(let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price
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
            // dispatch action in reducer using auth data
        } else {
            let bookingIds = []
            let bookingDates = []

            cart.forEach(room => bookingIds.push(room.id))
            cart.forEach(room => {
                let dates = []
                for(let key in room.bookingDates) {
                    dates.push(room.bookingDates[key])
                }
                bookingDates.push(dates)
            })

            let bookingDetails = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                country: country.current.value,
                ids: bookingIds,
                registered: authorized,
                totalPrice: totalPrice
            }

            bookingIds.forEach((item, i) => {
                bookingDetails[item] = bookingDates[i]
            })

            console.log(bookingDetails)
            
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
                        <p>${ totalPrice }</p>
                    </div>
                </div>
                {
                    authorized ? (
                        <div className="overview_item confirmation">
                            <button className="confirmation_btn">Confirmation</button>
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
