import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Calendar from 'react-calendar'
import { addToCart, setCurrentBooking } from '../../../../store/actions/bookingActions'
import ReviewComment from './ReviewComment'
import RoomSlider from './RoomSlider/RoomSlider'
import './RoomPage.css'

const RoomPage = (props) => {
    const dispatch = useDispatch()
    const { rooms } = useSelector(state => state.roomsReducers)
    const { cart } = useSelector(state => state.bookingReducers)

    const room = () => {
        if(rooms.length !== 0) {
            return rooms.find(item => item.id == props.match.params.id)
        }
    }

    const [ toggleBody, setToggleBody ] = useState(true)
    const [ servicesModal, setServicesModal ] = useState(false)

    const switchToDetails = () => setToggleBody(true)
    const switchToReviews = () => setToggleBody(false)

    // Calendar
    const [ date, setDate ] = useState(new Date())
    const [ reservationDate, setReservationDate ] = useState(null)

    const setReservationDates = reservDate => setReservationDate(reservDate)

    let numberOfGuests = useRef(null)
    // services
    const [ food, setFood ] = useState(false)
    const [ pool, setPool ] = useState(false)
    const [ gym, setGym ] = useState(false)

    const addFood = () => setFood(!food)
    const addPool = () => setPool(!pool)
    const addGym = () => setGym(!gym)

    const openServicesModal = e => {
        e.preventDefault()
        setServicesModal(true)
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
        setDate(new Date)
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
                            bookingStatus(Number(props.match.params.id)) ? (
                                <button type="submit" className="book_btn">Book now</button>
                            ) : ''
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
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                                <ReviewComment />
                            </div>
                            <form className="new_review">
                                <div className="feedback_card">
                                    <div className="card">
                                        <div className="card_img"></div>
                                        <textarea 
                                            name="review" 
                                            placeholder="Enter your feedbeack here..."
                                            className="new_message"
                                        >
                                        </textarea>
                                        <div className="customer_details">
                                            <p className="customer_name">James Anderson</p>
                                            <p className="feedback_date">30.12.2019</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="review_btn">Add Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            <div className={`services_selector ${servicesModal ? 'active' : ''}`}>
                <form className={`services_holder ${servicesModal ? 'active' : ''}`}>
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
                            `$${room().price + servicesTotal}` : ''
                        }
                    </p>
                    <button type="submit" onClick={handleSubmit}>Confirm</button>
                </form>
            </div>          
        </div>
    )
}

export default RoomPage
