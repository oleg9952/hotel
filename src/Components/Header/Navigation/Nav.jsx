import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="header_nav">
            <div className="nav_column">
                <div className="nav_logo"></div>
            </div>
            <div className="nav_column">
                <ul className="nav_items">
                    <li className="nav_item">Home</li> 
                    <span className="divider-one">|</span>
                    <li className="nav_item">Rooms
                        <ul className="room_class">
                            <li className="class_item">VIP</li>
                            <li className="class_item">Bussines</li>
                            <li className="class_item">Standard</li>
                            <li className="class_item">Economy</li>
                        </ul>
                    </li>
                    <span className="divider-two">|</span>
                    <li className="nav_item">Gallery</li>
                    <span className="divider-three">|</span>
                    <li className="nav_item">Contact</li> 
                </ul>
            </div>
            <div className="nav_column">
                {/* <div className="logged_in">
                    <div className="profile_circle">
                        S
                        <div className="hover_holder">
                            <ul className="profile_options">
                                <div className="options_triangle"></div>
                                <li className="options_item">Account</li>
                                <li className="options_item">Log out</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="logged_out">
                    <button className="log_in">Log in</button>
                </div>
            </div>
            <div className="header_underline"></div>
        </div>
    )
}

export default Nav
