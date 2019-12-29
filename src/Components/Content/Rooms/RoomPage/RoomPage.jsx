import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, setCurrentBooking } from '../../../../store/actions/bookingActions'
import ReviewComment from './ReviewComment'
import RoomSlider from './RoomSlider/RoomSlider'
import './RoomPage.css'

const RoomPage = (props) => {
    const dispatch = useDispatch()
    const { rooms } = useSelector(state => state.roomsReducers)

    const room = () => {
        if(rooms.length !== 0) {
            return rooms.find(item => item.id == props.match.params.id)
        }
    }

    const [ toggleBody, setToggleBody ] = useState(true)

    const switchToDetails = () => setToggleBody(true)
    const switchToReviews = () => setToggleBody(false)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setCurrentBooking(room()))
        dispatch(addToCart())
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
                    <form className="header_column room_booking" onSubmit={handleSubmit}>
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
                        
                        <div className="room_calendar">
                            <h2>Booking Calendar</h2>
                        </div>
                        <div className="room_guests">
                            <label>Guests: </label>
                            <select name="guests_number" className="guests_number">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <button type="submit" className="book_btn">Book now</button>
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
        </div>
    )
}

export default RoomPage
