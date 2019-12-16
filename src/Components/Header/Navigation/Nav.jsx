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
                    <li className="nav_item">Home</li> |
                    <li className="nav_item">Rooms</li> |
                    <li className="nav_item">Gallery</li> |
                    <li className="nav_item">Contact</li> 
                </ul>
            </div>
            <div className="nav_column">
                <div className="logged_in">
                    <div className="profile_circle">S</div>
                    <div className="profile_nav">
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
