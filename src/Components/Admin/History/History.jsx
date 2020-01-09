import React from 'react'
import { Link } from 'react-router-dom'
import style from './History.module.css'
import '../../../App.css'

const History = () => {
    return (
        <div className={style.history}>
            <h1 className={style.history_title}>My Booking History</h1>
            <div className={style.history_table}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col" className={style.status}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </td>
                            <td>03.01.2020</td>
                            <td>$432</td>
                            <td>
                                <div className={`${style.status_indicator} ${style.confirmed}`} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </td>
                            <td>03.01.2020</td>
                            <td>$432</td>
                            <td>
                                <div className={`${style.status_indicator} ${style.in_progress}`} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </td>
                            <td>03.01.2020</td>
                            <td>$432</td>
                            <td>
                                <div className={`${style.status_indicator} ${style.canceled}`} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History