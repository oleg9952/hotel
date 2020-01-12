import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleAdmin } from '../../../store/actions/adminActions'
import style from './History.module.css'

const BookingItem = (props) => {
    const dispatch = useDispatch()

    const { 
        id,
        name,
        price,
        imgBaseUrl,
        img,
        guests,
        checkIn,
        checkOut,
        food,
        pool,
        gym
    } = props.room

    return (
        <div className={style.booking_item}>
            <div className={style.item_img} 
                style={{
                    backgroundImage: `url(${imgBaseUrl + id}/${img[0]})`
                }}
            />
            <div className={style.item_details}>
                <p className={style.item_title}>
                    <Link to={`/rooms/${id}`} onClick={() => dispatch(toggleAdmin())}>
                        { name }
                    </Link>
                </p>
                <div className={style.order_info}>
                    <div className={style.info_column}>
                        <p>Details:</p>
                        <ul>
                            <li>Check in: { checkIn }</li>
                            <li>Check out: { checkOut }</li>
                            <li>Guests: 0{ guests }</li>
                        </ul>
                    </div>
                    <div className={style.info_column}>
                        <p>Services:</p>
                        <ul>
                            <li>Food: { food ? '+' : '-' }</li>
                            <li>Pool: { pool ? '+' : '-' }</li>
                            <li>Gym: { gym ? '+' : '-' }</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.item_price}>
                ${ price }
            </div>
        </div>
    )
}

export default BookingItem
