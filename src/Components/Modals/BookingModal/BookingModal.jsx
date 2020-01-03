import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from 'react-calendar'
import { resetCurrentBooking, addToCart } from '../../../store/actions/bookingActions'
import RoomSlider from '../../Content/Rooms/RoomPage/RoomSlider/RoomSlider'
import './BookingModal.css'

const BookingModal = () => {
    const dispatch = useDispatch()
    const [ stepTwo, setStepTwo ] = useState(false)
    const { currentBooking } = useSelector(state => state.bookingReducers)

    let numberOfGuests = useRef(0)

    const handleModalClose = e => {
        e.preventDefault()
        dispatch(resetCurrentBooking())
        setTimeout(() => setStepTwo(false), 500)
    }
    
    // ------ CALENDAR ------
    const [ date, setDate ] = useState(new Date())
    const [ reservationDate, setReservationDate ] = useState(null)
    const [ bookingDuration, setBookingDuration ] = useState(1)
    
    const setReservationDates = reservDate => setReservationDate(reservDate)
    
    const calcBookingDuration = (checkIn, checkOut) => {
        const oneDay = 1000 * 60 * 60 * 24
        
        let checkInMs = checkIn.getTime()
        let checkOutMs = checkOut.getTime()
        
        let differenceMs = Math.abs(checkInMs - checkOutMs)
        
        return Math.round(differenceMs / oneDay)
    }
    
    const handleStepSwitch = e => {
        e.preventDefault()
        setStepTwo(true)
        if(reservationDate !== null) {
            setBookingDuration(calcBookingDuration(reservationDate[0], reservationDate[1]))
        } else {
            setBookingDuration(1)
        }
    }

    // ------ SERVICES ------
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
            numberOfGuests.current.value,
            reservationDate
        ))
        setBookingDuration(1)
        setDate(new Date())
        setReservationDate(null)
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
            <div className={`booking_modal ${currentBooking ? 'active' : ''}`}>
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
                                <Calendar 
                                    className="booking_calendar"
                                    onChange={setReservationDates}
                                    value={date}
                                    selectRange
                                    minDate={new Date()}
                                />
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
                                    <div className="service_item">
                                        <p className="service_name">Food</p>
                                        <div className="service_select" onClick={addFood}>
                                            {
                                                food ?
                                                <i className="fas fa-clipboard-check"></i> :
                                                <i className="fas fa-cart-plus"></i>
                                            }
                                        </div>
                                    </div>
                                    <div className="service_item">
                                        <p className="service_name">Pool</p>
                                        <div className="service_select" onClick={addPool}>
                                            {
                                                pool ?
                                                <i className="fas fa-clipboard-check"></i> :
                                                <i className="fas fa-cart-plus"></i>
                                            }
                                        </div>
                                    </div>
                                    <div className="service_item">
                                        <p className="service_name">Gym</p>
                                        <div className="service_select" onClick={addGym}>
                                            {
                                                gym ?
                                                <i className="fas fa-clipboard-check"></i> :
                                                <i className="fas fa-cart-plus"></i>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <p className="booking_price">
                                    
                                    {
                                        currentBooking !== null ?
                                        `$${(currentBooking.price * bookingDuration) + servicesTotal}` : ''
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
