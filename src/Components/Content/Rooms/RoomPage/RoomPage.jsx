import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from 'react-calendar'
import { addToCart, setCurrentBooking } from '../../../../store/actions/bookingActions'
import { addReview } from '../../../../store/actions/reviewActions'
import { fireNotification } from '../../../../store/actions/authActions'
import ReviewComment from './ReviewComment'
import RoomSlider from './RoomSlider/RoomSlider'
import Spinner from '../../../Spinner/Spinner'
import './RoomPage.css'

const RoomPage = (props) => {
    const dispatch = useDispatch()
    const { rooms } = useSelector(state => state.roomsReducers)
    const { cart } = useSelector(state => state.bookingReducers)
    const { authorized, user } = useSelector(state => state.authReducers)
    const { reviews } = useSelector(state => state.reviewReducers)

    const compare = (a, b) => {
        const orderA = a.date
        const orderB = b.date

        if(orderA < orderB) {
            return -1
        } else if(orderA > orderB) {
            return 1
        } else {
            return 0
        }
    }

    const currentReviews = () => {
        if(reviews !== null) {
            let rev = []
            reviews.forEach(item => {
                if(item.id == props.match.params.id) {
                    rev.push(item)
                }
            })

            rev.sort(compare)

            return rev            
        }
    }

    let numberOfGuests = useRef(null)

    const room = () => {
        if(rooms.length !== 0) {
            return rooms.find(item => item.id == props.match.params.id)
        }
    }

    const [ toggleBody, setToggleBody ] = useState(true)
    const [ servicesModal, setServicesModal ] = useState(false)

    const switchToDetails = () => setToggleBody(true)
    const switchToReviews = () => setToggleBody(false)

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
    
    // ------ SERVICES ------
    const [ food, setFood ] = useState(false)
    const [ pool, setPool ] = useState(false)
    const [ gym, setGym ] = useState(false)

    const addFood = () => setFood(!food)
    const addPool = () => setPool(!pool)
    const addGym = () => setGym(!gym)

    const openServicesModal = e => {
        e.preventDefault()
        if(reservationDate) {
            setServicesModal(true)
            setBookingDuration(calcBookingDuration(reservationDate[0], reservationDate[1]))
        } else {
            setBookingDuration(1)
            dispatch(fireNotification('noDates'))
        }
        
    }

    const closeServicesModal = () => setServicesModal(false)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setCurrentBooking(room()))
        dispatch(addToCart(
            [food, pool, gym],
            numberOfGuests.current.value,
            reservationDate
        ))
        setDate(new Date())
        setServicesModal(false)
        setTimeout(() => {
            setFood(false)
            setPool(false)
            setGym(false)
        }, 500)
    }

    const bookingStatus = currentId => {
        let status = []
        for(let i = 0; i < cart.length; i++) {
            status.push(cart[i].id)
        }
        return status.indexOf(currentId) === -1
    }

    let servicesTotal = 0

    for(let i = 0; i < [food, pool, gym].filter(Boolean).length; i++) {
        servicesTotal += 10
    }

    //----- ADD REVIEW -----
    let firstName = useRef(null)
    let lastName = useRef(null)
    let reviewText = useRef(null)

    const handleNewReview = e => {
        e.preventDefault()

        let inputs = [
            firstName,
            lastName,
            reviewText
        ]

        let newReview = {
            id: room().id,
            date: new Date().getTime(),
            message: reviewText.current.value,
            registered: authorized
        }

        if(authorized) {
            dispatch(addReview({
                ...newReview,
                name: `${user.firstName} ${user.lastName}`
            }))
            inputs[inputs.length - 1].current.value = null
        } else {
            dispatch(addReview({
                ...newReview,
                name: `${firstName.current.value} ${lastName.current.value}`
            }))
            inputs.forEach(input => input.current.value = null)
        }
    }

    return (
        <div className="room_page">
            <div className="room_header">
                <div className="content">
                    <div className="header_column room_preview">
                        {
                            rooms.length !== 0 ? (
                                <RoomSlider
                                    room={room()}
                                />
                            ) : ''
                        }
                    </div>
                    <form className="header_column room_booking" onSubmit={openServicesModal}>
                        <div className="title_rating">
                            <h1 className="room_title">
                                { 
                                    rooms.length !== 0 ? 
                                    room().name : ''
                                }
                            </h1>
                            <div className="room_rating">
                                <span>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span>
                                    <i className="fas fa-star"></i>
                                </span>
                                <span>
                                    <i className="far fa-star"></i>
                                </span>
                            </div>
                        </div>
                        <Calendar
                            className="room_calendar"
                            onChange={setReservationDates}
                            value={date}
                            selectRange
                            minDate={new Date()}
                        />
                        <div className="room_guests">
                            <label>Guests: </label>
                            <select name="guests_number" className="guests_number" ref={numberOfGuests}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <p className="room_price">
                            { 
                                rooms.length !== 0 ? 
                                `$${room().price}` : ''
                            }
                        </p>
                        {
                            rooms.length !== 0 ?
                            bookingStatus(Number(props.match.params.id)) && !room().reserved ? (
                                <button type="submit" className="book_btn">Book now</button>
                            ) : '' : ''
                        }
                        
                    </form>
                </div>
            </div>
            <div className="room_body">
                <div className="content">
                    <div className="body_nav">
                        <div className={`nav_item ${toggleBody ? 'active' : ''}`}
                            onClick={switchToDetails}
                        >Description</div>
                        <div className={`nav_item ${!toggleBody ? 'active' : ''}`}
                            onClick={switchToReviews}
                        >Reviews</div>
                    </div>
                    <div className="body_pages">
                        <div className={`details ${toggleBody ? 'active' : ''}`}>
                            <h2>Details</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, consequuntur facere enim beatae porro deleniti qui sapiente in dolorem quidem quaerat maiores corrupti neque quae officiis eum at aliquam nulla.</p><br></br>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, consequuntur facere enim beatae porro deleniti qui sapiente in dolorem quidem quaerat maiores corrupti neque quae officiis eum at aliquam nulla.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, consequuntur facere enim beatae porro deleniti qui sapiente in dolorem quidem quaerat maiores corrupti neque quae officiis eum at aliquam nulla.</p><br></br>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, consequuntur facere enim beatae porro deleniti qui sapiente in dolorem quidem quaerat maiores corrupti neque quae officiis eum at aliquam nulla.</p>
                        </div>
                        <div className={`reviews ${!toggleBody ? 'active' : ''}`}>
                            <h2>Reviews</h2>
                            <div className="customer_reviews">
                                {
                                    reviews !== null ?
                                    currentReviews().map(review => (
                                        <ReviewComment 
                                            key={review.date}
                                            review={review}
                                        />
                                    )) : <Spinner />
                                }
                            </div>
                            {
                                authorized ? (
                                    <form className="customer_review auth-true" onSubmit={handleNewReview}>
                                        <div className="profile_pic"
                                            style={{ backgroundImage: `url(${user.profileImg})` }}
                                        >
                                            { !user.profileImg ? user.firstName.charAt(0) : '' }
                                        </div>
                                        <p className="user_name">
                                            {`${user.firstName} ${user.lastName}` }
                                        </p>
                                        <textarea name="message"
                                            placeholder="Message..."
                                            ref={reviewText}
                                        ></textarea>
                                        <button type="submit">Send</button>
                                    </form>
                                ) : (
                                    <form className="customer_review" onSubmit={handleNewReview}>
                                        <div className="review_head">
                                            <input type="text"
                                                placeholder="First Name"
                                                ref={firstName}
                                            />
                                            <input type="text"
                                                placeholder="Last Name"
                                                ref={lastName}
                                            />
                                        </div>
                                        <textarea name="message"
                                            placeholder="Message..."
                                            ref={reviewText}
                                        ></textarea>
                                        <button type="submit">Send</button>
                                    </form>
                                )
                            }                            
                        </div>
                    </div>
                </div>
            </div>  
            <div className={`services_selector ${servicesModal ? 'active' : ''}`}>
                <form className={`services_holder ${servicesModal ? 'active' : ''}`} onSubmit={handleSubmit}>
                    <div className="services_close" onClick={closeServicesModal}>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className="services_title">Services</h2>
                    <div className="services_item">
                        Food
                        <div className="item_selector" onClick={addFood}>
                            {
                                food ?
                                <i className="fas fa-clipboard-check"></i> :
                                <i className="fas fa-cart-plus"></i>
                            }
                        </div>
                    </div>
                    <div className="services_item">
                        Pool
                        <div className="item_selector" onClick={addPool}>
                            {
                                pool ?
                                <i className="fas fa-clipboard-check"></i> :
                                <i className="fas fa-cart-plus"></i>
                            }
                        </div>
                    </div>
                    <div className="services_item">
                        Gym
                        <div className="item_selector" onClick={addGym}>
                            {
                                gym ?
                                <i className="fas fa-clipboard-check"></i> :
                                <i className="fas fa-cart-plus"></i>
                            }
                        </div>
                    </div>
                    <p className="total_price">
                        { 
                            rooms.length !== 0 ? 
                            `$${(room().price * bookingDuration) + servicesTotal}` : ''
                        }
                    </p>
                    <button type="submit">Confirm</button>
                </form>
            </div>          
        </div>
    )
}

export default RoomPage
