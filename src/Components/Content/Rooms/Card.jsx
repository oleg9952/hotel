import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentBooking } from '../../../store/actions/bookingActions'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.bookingReducers)

    const {
        id,
        name,
        type,
        typeDescription,
        numberOfRooms,
        price,
        imgBaseUrl,
        img,
        reserved
     } = props.room
    const [ details, setDetails ] = useState(false)
    
    const handleDetailsToggle = () => setDetails(!details)

    const bookingStatusCart = currentId => {
        let status = []
        for(let i = 0; i < cart.length; i++) {
            status.push(cart[i].id)
        }
        return status.indexOf(currentId) === -1
    }

    //------- NUMBER OF REVIEWS -------
    const { reviews } = useSelector(state => state.reviewReducers)

    const getNumberOfReviews = (reviews, id) => {
        let counter = 0
        reviews.forEach(review => {
            if(review.id === id) {
                counter += 1
            }
        })
        return counter
    }
        
    return (
        <div className="room_card">
            <div className="card_img"
                style={{ backgroundImage: `url(${imgBaseUrl + id}/${img[0]})` }}
            >
                <div className="card_info" onClick={handleDetailsToggle}>
                    {details ? (
                        <>
                            <div></div>
                            <div></div>
                        </>
                    ) : 'i'}
                </div>
                {
                    bookingStatusCart(id) && !reserved ? (
                        <div className="card_select"
                            onClick={() => dispatch(setCurrentBooking(props.room))}
                        >
                            <div></div>
                            <div></div>
                        </div>
                    ) : ''
                }
                <div className={`card_status ${reserved ? 'reserved' : ''}`}>
                    { reserved ? 'Reserved' : 'Available' }
                </div>
            </div>
            <div className="card_details">
                <Link to={`/rooms/${id}`}>
                    <p className="card_title">{ name }</p>
                </Link>
                <div className="card_rating">
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
                <p className="card_reviews">
                    {
                        reviews ?
                        `${getNumberOfReviews(reviews, id)} ` : 0
                    }
                    Reviews
                </p>
                <div className="card_price">
                    <p>${ price }</p>
                    <p>night</p>
                </div>
            </div>
            <div className={`card_info--toggle ${details ? 'active' : ''}`}>
                <p className="info_title">Details</p>
                <p className="info_number">Rooms: { numberOfRooms }</p>
                <p className="info_type">Type: { type }</p>
                <p className="info_status">{ typeDescription }</p>
            </div>
        </div>
    )
}

export default Card
