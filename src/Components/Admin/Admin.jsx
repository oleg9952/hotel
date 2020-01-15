import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAdmin } from '../../store/actions/adminActions'
import { signOut } from '../../store/actions/authActions'
import { resetHistory } from '../../store/actions/bookingActions'
import style from './Admin.module.css'

import UserInfo from './UserInfo/UserInfo'
import History from './History/History'
import BookingDetails from './History/BookingDetails'
import Favorites from './Favorites/Favorites'

const Admin = () => {
    // const { firstName, lastName, email } = useSelector(state => state.authReducers.user)

    const [ toggleNav, setToggleNav ] = useState(false)
    const dispatch = useDispatch()

    // ---- NAV MARKERS ----
    const [ activeNavItem, setActiveNavItem ] = useState('info')

    const handleLinkMarker = e => {
        switch(e.target.innerText) {
            case 'User Info':
                setActiveNavItem('info')
                return
            case 'History':
                setActiveNavItem('hist')
                return
            case 'Favorites':
                setActiveNavItem('fav')
                return
            default:
                setActiveNavItem('info')
                return
        }
    }

    const handleNavToggle = () => setToggleNav(!toggleNav)

    const handleSignOut = () => {
        dispatch(signOut())
        dispatch(toggleAdmin())
        dispatch(resetHistory())
    }

    return (
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
                    <Link to="/" onClick={handleSignOut}>
                        <i className="fas fa-power-off"></i>
                    </Link>
                </div>
            </div>
            <div className={`${style.admin_body} ${toggleNav ? style.active : ''}`}>
                <div className={style.nav}>
                    <div className={style.nav_header}>
                        <div className={style.profile_img} />
                        <p className={style.user_name}>
                            {/* { `${firstName} ${lastName}` } */}
                        </p>
                        <p className={style.user_email}>
                            {/* { email } */}
                        </p>
                    </div>
                    {/* ------- USER NAV ------- */}
                    <ul className={style.nav_holder}>
                        <Link to="/" onClick={() => dispatch(toggleAdmin())}>
                            <li onClick={handleLinkMarker}>
                                <i className="fas fa-hotel"></i>
                                    Home
                            </li>
                        </Link>
                        <Link to="/admin/user">
                            <li onClick={handleLinkMarker}
                                className={`${activeNavItem === 'info' ? style.active : ''}`}
                            >
                                <i className="fas fa-user"></i>
                                    User Info
                            </li>
                        </Link>
                        <Link to="/admin/history">
                            <li onClick={handleLinkMarker}
                                className={`${activeNavItem === 'hist' ? style.active : ''}`}
                            >
                                <i className="fas fa-history"></i>
                                    History
                            </li>
                        </Link>
                        <Link to="/admin/favorites">
                            <li onClick={handleLinkMarker}
                                className={`${activeNavItem === 'fav' ? style.active : ''}`}
                            >
                                <i className="far fa-heart"></i>
                                    Favorites
                            </li>
                        </Link>
                    </ul>
                    {/* ------- ADMIN NAV ------- */}
                    {/* <ul className={style.admin_nav}>
                        <li>
                            <Link to="/" onClick={() => dispatch(toggleAdmin())}>
                                Home
                            </Link>
                        </li>
                        <li>Test</li>
                    </ul> */}
                </div>
                <div className={style.content}>
                    <Switch>
                        <Route exact path="/admin/user" component={UserInfo} />
                        <Route exact path="/admin/history" component={History} />
                        <Route exact path="/admin/favorites" component={Favorites} />
                        <Route exact path="/admin/history/:bookingID" component={BookingDetails} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Admin
