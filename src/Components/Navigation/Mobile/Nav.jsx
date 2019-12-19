import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="mobile_nav">
            <div className="nav_bg"></div>
            <div className="nav_holder">
                <div className="nav_auth">
                    <div className="logged_in--mobile">
                        <div className="profile_img"></div>
                        <p className="user_email">user@gmail.com</p>
                        <div className="log_out">Log out</div>
                    </div>
                    {/* <div className="logged_out--mobile">
                        <div className="login_btn">Log in</div>
                    </div> */}
                </div>
                <div className="nav_body">
                    <ul className="body_nav">
                        <li className="nav_item">
                            <span className="item_icon">
                                <i className="fas fa-h-square"></i>
                            </span>
                            Home
                        </li>
                        <li className="nav_item">
                            <span className="item_icon">
                                <i className="fas fa-hotel"></i>
                            </span>
                            Rooms
                        </li>
                        <li className="nav_item">
                            <span className="item_icon">
                                <i className="fas fa-images"></i>
                            </span>
                            Gallery
                        </li>
                        <li className="nav_item">
                            <span className="item_icon">
                                <i className="fas fa-address-book"></i>
                            </span>
                            Contact
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Nav
