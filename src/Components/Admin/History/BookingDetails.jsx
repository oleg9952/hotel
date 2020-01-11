import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from './History.module.css'

import BookingItem from './BookingItem'

const BookingDetails = () => {
    const { bookingHistory } = useSelector(state => state.bookingReducers)
    const { bookingID } = useParams()
    
    const retrieveTotalPrice = arg => {
        arg.forEach(item => {
            if(item.bookingID == bookingID) {
                return `${item.totalPrice}`
            }
        })
    }

    return (
        <div className={style.booking_details}>
            <h1 className={style.page_title}>Booking ID: 23214</h1>

            <div className={style.details_bookings}>
                {
                    bookingHistory.map(bookingItem => {
                        if(bookingItem.bookingID == bookingID) {
                            return bookingItem.bookings.map(room => (
                                <BookingItem
                                    key={room.id} 
                                    room={room}
                                />
                            ))
                        }
                    })
                }
                
            </div>
            <p className={style.total_price_title}>Total Price</p>
            <p className={style.total_price}>${ retrieveTotalPrice(bookingHistory) }</p>
        </div>
    )
}

export default BookingDetails
