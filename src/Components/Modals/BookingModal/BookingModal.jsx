import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCurrentBooking, addToCart } from '../../../store/actions/bookingActions'
import RoomSlider from '../../Content/Rooms/RoomPage/RoomSlider/RoomSlider'
import './BookingModal.css'

const BookingModal = () => {
    const dispatch = useDispatch()
    const [ stepTwo, setStepTwo ] = useState(false)
    const { currentBooking } = useSelector(state => state.bookingReducers)

    const handleStepSwitch = e => {
        e.preventDefault()
        setStepTwo(true)
    }

    const handleModalClose = e => {
        e.preventDefault()
        dispatch(resetCurrentBooking())
        setTimeout(() => setStepTwo(false), 500)
    }


    let numberOfGuests = useRef(0)
    // services
    const [ food, setFood ] = useState(false)
    const [ pool, setPool ] = useState(false)
    const [ gym, setGym ] = useState(false)

    const addFood = () => setFood(!food)
    const addPool = () => setPool(!pool)
    const addGym = () => setGym(!gym)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addToCart(
            [food, pool, gym], 
            numberOfGuests.current.value)
        )
        numberOfGuests.current.value = '1'
        setTimeout(() => {
            setStepTwo(false)
            setFood(false)
            setPool(false)
            setGym(false)
        }, 500)
    }

    let servicesTotal = 0

    for(let i = 0; i < [food, pool, gym].filter(Boolean).length; i++) {
        servicesTotal += 10
    }
        
    return (
        <div className={`booking_bg ${currentBooking ? 'active' : ''}`}>
            <div className="booking_modal">
                <div className="modal_header">
                    <p className="modal_title">Confirm your booking</p>
                    <div className="modal_close"
                        onClick={handleModalClose}
                    >
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="modal_body">
                    <div className="body_holder">
                        
                        <div className="body_column">
                            {
                                currentBooking !== null ? (
                                    <RoomSlider 
                                        room={currentBooking}
                                    />
                                ) : ''
                            }
                        </div>
                    
                        <form className="body_column steps" onSubmit={handleSubmit}>
                            <div className={`booking_date ${stepTwo ? 'active' : ''}`}>
                                <p className="booking_title">
                                    {
                                        currentBooking !== null ?
                                        currentBooking.name : ''
                                    }
                                </p>
                                <div className="booking_calendar">
                                    Calendar
                                </div>
                                <div className="booking_guests">
                                    <label>
                                        Guests
                                    </label>
                                    <select name="guests" ref={numberOfGuests}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                    </select>
                                </div>
                                <button 
                                    className="modal_btn"
                                    onClick={handleStepSwitch}
                                >
                                    Next
                                </button>
                            </div>
                            <div className={`booking_services ${stepTwo ? 'active' : ''}`}>
                                <p className="services_title">Services</p>
                                <div className="services_options">
                                    <div className="service_item"
                                        style={{
                                            backgroundColor: food ? 'green' : ''
                                        }}
                                    >
                                        <p className="service_name">Food</p>
                                        <div className="service_select" onClick={addFood}>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="service_item"
                                        style={{
                                            backgroundColor: pool ? 'green' : ''
                                        }}
                                    >
                                        <p className="service_name">Pool</p>
                                        <div className="service_select" onClick={addPool}>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="service_item"
                                        style={{
                                            backgroundColor: gym ? 'green' : ''
                                        }}
                                    >
                                        <p className="service_name">Gym</p>
                                        <div className="service_select" onClick={addGym}>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="booking_price">
                                    {
                                        currentBooking !== null ?
                                        `$${currentBooking.price + servicesTotal}` : ''
                                    }
                                </p>
                                <button 
                                    type="submit" 
                                    className="modal_btn"
                                >Add to cart</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
