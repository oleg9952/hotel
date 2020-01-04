import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleAdmin } from '../../store/actions/adminActions'
import style from './Admin.module.css'

const Admin = () => {
    const [ toggleNav, setToggleNav ] = useState(false)
    const dispatch = useDispatch()

    const handleNavToggle = () => setToggleNav(!toggleNav)

    return (
        <Router>
            <div className={style.admin}>
                <div className={style.admin_header}>
                    <div 
                        className={`${style.nav_toggle} ${toggleNav ? style.active : ''}`}
                        onClick={handleNavToggle}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={style.log_out}>
                        <i className="fas fa-power-off"></i>
                    </div>
                </div>
                <div className={`${style.admin_body} ${toggleNav ? style.active : ''}`}>
                    <div className={style.nav}></div>
                    <div className={style.content}>
                        
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Admin
