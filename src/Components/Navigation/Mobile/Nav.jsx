import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMobileNav } from '../../../store/actions/navActions'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const mobileNav = useSelector(state => state.navReducers.mobileNav)
    const dispatch = useDispatch()

    return (
        <div className={`mobile_nav ${mobileNav ? 'active' : ''}`}>
            <div className="nav_holder">
                <div className="mobile_bg"></div>
                <div className="nav_header">
                    <div>
                        <p className="header_title">Sections</p>
                        <div className="title_underline"></div>
                    </div>
                    <div className="logged_in--mobile">
                        <div className="profile_img"></div>
                        <p className="user_name">Alex Brand</p>
                        <p className="user_email">alex.brand@gmail.com</p>
                    </div>
                </div>
                <div className="nav_body">
                    <ul className="mobile_items">
                        <li className="nav_item">
                            <span>
                            <i className="fas fa-bookmark"></i>
                            </span>
                            My Bookings
                        </li>
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-user-circle"></i>
                            </span>
                            Account
                        </li>
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-sign-out-alt"></i>
                            </span>
                            Log out
                        </li>
                    </ul>
                    <ul className="mobile_items">
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-hotel"></i>
                            </span>
                            <Link 
                                to="/" 
                                onClick={() => dispatch(toggleMobileNav())}
                            >Home</Link>
                        </li>
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-door-open"></i>
                            </span>
                            <Link 
                                to="/rooms"
                                onClick={() => dispatch(toggleMobileNav())}
                            >Rooms</Link>
                        </li>
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-images"></i>
                            </span>
                            <Link 
                                to="/gallery"
                                onClick={() => dispatch(toggleMobileNav())}
                            >Gallery</Link>
                        </li>
                        <li className="nav_item">
                            <span>
                                <i className="fas fa-address-book"></i>
                            </span>
                            <Link 
                                to="/contact"
                                onClick={() => dispatch(toggleMobileNav())}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Nav
