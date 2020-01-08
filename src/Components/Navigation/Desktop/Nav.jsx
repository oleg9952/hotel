import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMobileNav } from '../../../store/actions/navActions'
import { toggleAdmin } from '../../../store/actions/adminActions'
import { toggleAuthForms } from '../../../store/actions/authActions'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const { intro, mobileNav } = useSelector(state => state.navReducers)
    const { authorized } = useSelector(state => state.authReducers)
    const dispatch = useDispatch()

    return (
        // style={{display: intro ? 'grid' : 'none'}}
        <div className="header_nav" >
            <div className="nav_column">
                <div className="nav_logo"></div>
            </div>
            <div className="nav_column">
                <ul className="nav_items">
                    <Link to="/" className="nav_item">
                        <li>Home</li> 
                    </Link>
                    <span className="divider-one">|</span>
                    <li className="nav_item">
                        <Link to="/rooms">Rooms</Link>
                        <ul className="room_class">
                            <li className="class_item">VIP</li>
                            <li className="class_item">Bussines</li>
                            <li className="class_item">Standard</li>
                            <li className="class_item">Economy</li>
                        </ul>
                    </li>
                    <span className="divider-two">|</span>
                    <Link to="/gallery" className="nav_item">
                        <li>Gallery</li>
                    </Link>
                    <span className="divider-three">|</span>
                    <Link to="/contact" className="nav_item">
                        <li>Contact</li> 
                    </Link>
                </ul>
            </div>
            <div className="nav_column">
                {
                    authorized ? (
                        <div className="logged_in">
                            <div className="profile_circle">
                                S
                                <div className="hover_holder">
                                    <ul className="profile_options">
                                        <div className="options_triangle"></div>
                                        <li 
                                            className="options_item" 
                                            onClick={() => dispatch(toggleAdmin())}
                                        > 
                                            <Link to="/admin/user">
                                                Account
                                            </Link>
                                        </li>
                                        <li className="options_item">Log out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="logged_out">
                            <button className="log_in" onClick={() => dispatch(toggleAuthForms())}>Log in</button>
                        </div>
                    )
                }
                <div className={`mobile_toggle ${mobileNav ? 'active' : ''}`} onClick={() => dispatch(toggleMobileNav())}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="header_underline"></div>
        </div>
    )
}

export default Nav
