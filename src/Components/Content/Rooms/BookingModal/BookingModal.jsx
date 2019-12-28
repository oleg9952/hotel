import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCurrentBooking } from '../../../../store/actions/bookingActions'
import RoomSlider from '../RoomPage/RoomSlider/RoomSlider'
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
        
    return (
        <div className={`booking_bg ${currentBooking !== null ? 'active' : ''}`}>
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
                    
                        <form className="body_column steps">
                            <div className={`booking_date ${stepTwo ? 'active' : ''}`}>
                                <p className="booking_title">Title...</p>
                                <div className="booking_calendar">
                                    Calendar
                                </div>
                                <div className="booking_guests">
                                    <label>
                                        Guests
                                    </label>
                                    <select name="guests">
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
                                    <div className="service_item">
                                        <p className="service_name">Service</p>
                                        <div className="service_select">
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="service_item">
                                        <p className="service_name">Service</p>
                                        <div className="service_select">
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="service_item">
                                        <p className="service_name">Service</p>
                                        <div className="service_select">
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="booking_price">134$</p>
                                <button 
                                    type="submit" 
                                    className="modal_btn"
                                    onClick={handleModalClose}
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
