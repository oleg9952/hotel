import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
    const { id, name, type, price, imgBaseUrl, img } = props.room
    const [ details, setDetails ] = useState(false)
    
    const handleDetailsToggle = () => setDetails(!details)

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
                <div className="card_select">
                    <div></div>
                    <div></div>
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
                <p className="card_reviews">16 Reviews</p>
                <div className="card_price">
                    <p>{ price }$</p>
                    <p>night</p>
                </div>
            </div>
            <div className={`card_info--toggle ${details ? 'active' : ''}`}>
                <p className="info_title">Details</p>
                <p className="info_number">Rooms: 3</p>
                <p className="info_type">Type: { type }</p>
                <p className="info_status">Status: avaliable</p>
            </div>
        </div>
    )
}

export default Card
