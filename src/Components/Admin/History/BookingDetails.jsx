import React from 'react'
import style from './History.module.css'

import BookingItem from './BookingItem'

const BookingDetails = () => {
    // const {id, name, price, imgBaseUrl, img, guests, bookingDates } = props.room

    const room = {
        id: 1,
        name: 'test_name',
        price: 43,
        imgBaseUrl: "/Assets/RoomPage/room_",
        img: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg"
        ],
        guests: 2,
        bookingDates: [
            '12.01.2020',
            '15.01.2020'
        ],
        services: {
            food: true,
            pool: false,
            gym: false
        }
    }

    const totalPrice = 432

    return (
        <div className={style.booking_details}>
            <h1 className={style.page_title}>Booking ID: 23214</h1>

            <div className={style.details_bookings}>
                <BookingItem 
                    room={room}
                />
                <BookingItem 
                    room={room}
                />
                <BookingItem 
                    room={room}
                />
                <BookingItem 
                    room={room}
                />
            </div>
            <p className={style.total_price_title}>Total Price</p>
            <p className={style.total_price}>${ totalPrice }</p>
        </div>
    )
}

export default BookingDetails
