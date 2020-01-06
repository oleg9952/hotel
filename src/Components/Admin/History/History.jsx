import React from 'react'
import { Link } from 'react-router-dom'
import style from './History.module.css'
import '../../../App.css'

const History = () => {
    return (
        <div className={style.history}>
            <h1 className={style.history_title}>My Booking History</h1>
            <div className={style.history_table}>
                <table className="table table-striped table-hover" id={style.history_table}>
                    <thead>
                        <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </th>
                            <td>03.01.2020</td>
                            <td>$432</td>
                            <td>
                                <div className={`${style.status_indicator} ${style.confirmed}`} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </th>
                            <td>03.01.2020</td>
                            <td>$432</td>
                            <td>
                                <div className={`${style.status_indicator} ${style.in_progress}`} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <Link to="/admin/history/1">
                                    #1302
                                </Link>
                            </th>
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