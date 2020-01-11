import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './History.module.css'
import '../../../App.css'

const History = () => {
    const bookings = useSelector(state => state.bookingReducers.bookingHistory)

    const formatDate = date => {
        let d = new Date(date)
        let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        let month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
        let year = d.getFullYear()
        return `${day}.${month}.${year}`
    }

    let counter = 0

    return (
        <div className={style.history}>
            <h1 className={style.history_title}>My Booking History</h1>
            <div className={style.history_table}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col" className={style.status}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <tr key={booking.bookingID}>
                                    <td>
                                        { counter += 1 }
                                    </td>
                                    <td>
                                        <Link to={`/admin/history/${booking.bookingID}`}>
                                            { `${booking.bookingID}` }
                                        </Link>
                                    </td>
                                    <td>
                                        { formatDate(booking.bookingDate) }
                                    </td>
                                    <td>${ booking.totalPrice }</td>
                                    <td>
                                        <div className={`${style.status_indicator} ${style.in_progress}`}>
                                            <span className={style.status_tooltip}>
                                                Processing
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History