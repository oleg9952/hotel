import React from 'react'
import style from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <div className={style.dashboard_section}>
                <div className={style.expances_widget}></div>
                <div className={style.booking_history}></div>
            </div>
            <div className={style.dashboard_section}>
                <div className={style.recent_comments}></div>
            </div>
        </div>
    )
}

export default Dashboard