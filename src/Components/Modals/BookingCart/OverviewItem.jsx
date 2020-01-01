import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCart, removeCart } from '../../../store/actions//bookingActions'
import { Link } from 'react-router-dom'

const OverviewItem = (props) => {
    const dispatch = useDispatch()
    const {id, name, price, imgBaseUrl, img, guests } = props.room

    return (
        <div className="overview_item">
            <div className="item_column">
                <div className="room_img"
                    style={{ backgroundImage: `url(${imgBaseUrl + id}/${img[0]})` }}
                >
                    <div className="remove_item" onClick={() => dispatch(removeCart(id))}>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="item_column">
                <Link to={`/rooms/${id}`} onClick={() => dispatch(toggleCart())}>
                    <p className="item_title">{ name }</p>
                </Link>
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
                <p className="overview_check">Check in: 28.12.2019</p>
                <p className="overview_check">Check out: 31.12.2019</p>
            </div>
            <div className="item_column">
                <p className="overview_check">Rooms: 02</p>
                <p className="overview_check">Guests: 0{ guests }</p>
                <div className="price_holder">
                    <p>Price</p>
                    <p>${ price }</p>
                </div>
            </div>
            <div className="item_column">
                <div className="price_holder">
                    <p>Price</p>
                    <p>${ price }</p>
                </div>
                
            </div>
        </div>
    )
}

export default OverviewItem
