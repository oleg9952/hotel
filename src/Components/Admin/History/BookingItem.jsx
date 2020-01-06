import React from 'react'
import style from './History.module.css'

const BookingItem = (props) => {
    const { 
        id,
        name,
        price,
        imgBaseUrl,
        img,
        guests,
        bookingDates,
        services
    } = props.room

    const totalPrice = 537

    return (
        <div className={style.booking_item}>
            <div className={style.item_img} 
                style={{
                    backgroundImage: `url(${imgBaseUrl + id}/${img[0]})`
                }}
            />
            <div className={style.item_details}>
                <p className={style.item_title}>{ name }</p>
                <div className={style.order_info}>
                    <div className={style.info_column}>
                        <p>Details:</p>
                        <ul>
                            <li>Check in: { bookingDates[0] }</li>
                            <li>Check out: { bookingDates[1] }</li>
                            <li>Guests: 0{ guests }</li>
                        </ul>
                    </div>
                    <div className={style.info_column}>
                        <p>Services:</p>
                        <ul>
                            <li>Food: { services.food ? '+' : '-' }</li>
                            <li>Pool: { services.pool ? '+' : '-' }</li>
                            <li>Gym: { services.gym ? '+' : '-' }</li>
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
