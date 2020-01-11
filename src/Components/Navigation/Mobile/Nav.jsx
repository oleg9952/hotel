import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMobileNav } from '../../../store/actions/navActions'
import { toggleAdmin } from '../../../store/actions/adminActions'
import { toggleAuthForms, signOut } from '../../../store/actions/authActions'
import { resetHistory } from '../../../store/actions/bookingActions'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const mobileNav = useSelector(state => state.navReducers.mobileNav)
    const { authorized, user } = useSelector(state => state.authReducers)
    const dispatch = useDispatch()

    const handleSignIn = () => {
        dispatch(toggleMobileNav())
        dispatch(toggleAuthForms())
    }

    const handleSignOut = () => {
        dispatch(toggleMobileNav())
        dispatch(signOut())
        dispatch(resetHistory())
    }

    return (
        <div className={`mobile_nav ${mobileNav ? 'active' : ''}`}>
            <div className="nav_holder">
                <div className="mobile_bg"></div>
                <div className="nav_header">
                    <div>
                        <p className="header_title">Sections</p>
                        <div className="title_underline"></div>
                    </div>

                    {
                        authorized ? (
                            <div className="logged_in--mobile">
                                <div className="profile_img">
                                    { user.firstName.charAt(0) }
                                </div>
                                <p className="user_name">
                                    { `${user.firstName} ${user.lastName}` }
                                </p>
                                <p className="user_email">
                                    { user.email }
                                </p>
                            </div>
                        ) : ''
                    }
                    
                
                </div>
                <div className="nav_body">
                    {
                        authorized ? (
                            <ul className="mobile_items">
                                <li 
                                    className="nav_item"
                                    onClick={() => dispatch(toggleAdmin())}
                                >
                                    <span>
                                        <i className="fas fa-user-circle"></i>
                                    </span>
                                    <Link 
                                        to="/admin/user"
                                        onClick={() => dispatch(toggleMobileNav())}
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="nav_item" onClick={handleSignOut}>
                                    <span>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </span>
                                    Sign out
                                </li>
                            </ul>
                        ) : (
                            <ul className="mobile_items">
                                <li className="nav_item" onClick={handleSignIn}>
                                    <span>
                                        <i className="fas fa-sign-in-alt"></i>
                                    </span>
                                    Login
                                </li>
                            </ul>
                        )
                    }
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
