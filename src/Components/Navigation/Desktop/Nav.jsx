import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMobileNav } from '../../../store/actions/navActions'
import { toggleAdmin } from '../../../store/actions/adminActions'
import { toggleAuthForms, signOut } from '../../../store/actions/authActions'
import { resetHistory } from '../../../store/actions/bookingActions'
import { applyFilter } from '../../../store/actions/roomsActions'
import './Nav.css'

const Nav = () => {
    const dispatch = useDispatch()
    const { intro, mobileNav } = useSelector(state => state.navReducers)
    const { authorized, user } = useSelector(state => state.authReducers)

    const handleSignOut = () => {
        dispatch(signOut())
        dispatch(resetHistory())
    }

    return (
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
                            <li className="class_item">
                                <Link to="/rooms" 
                                    onClick={e => dispatch(applyFilter(e.target.innerText))}
                                >
                                    Single
                                </Link>
                            </li>
                            <li className="class_item">
                                <Link to="/rooms" 
                                    onClick={e => dispatch(applyFilter(e.target.innerText))}
                                >
                                    Double
                                </Link>
                            </li>
                            <li className="class_item">
                                <Link to="/rooms" 
                                    onClick={e => dispatch(applyFilter(e.target.innerText))}
                                >
                                    Triple
                                </Link>
                            </li>
                            <li className="class_item">
                                <Link to="/rooms" 
                                    onClick={e => dispatch(applyFilter(e.target.innerText))}
                                >
                                    Quad
                                </Link>
                            </li>
                            <li className="class_item">
                                <Link to="/rooms" 
                                    onClick={e => dispatch(applyFilter(e.target.innerText))}
                                >
                                    Queen
                                </Link>
                            </li>
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
                            <div className="profile_circle"
                                style={{ backgroundImage: `url(${user.profileImg})` }}
                            >
                                { !user.profileImg && user.profileImg !== undefined ? user.firstName.charAt(0) : '' }
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
                                        <li className="options_item"
                                            onClick={handleSignOut}
                                        >Log out</li>
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
