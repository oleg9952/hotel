import React from 'react'
import './Header.css'
import Nav from './Navigation/Nav'

const Header = () => {
    return (
        <div className="header">
            {/* <div className="header_intro">
                <p className="intro_title">Title</p>
                <p className="intro_subtitle">subtitle</p>
            </div> */}
            <div className="header_body">
                <Nav />
                <div className="header_slider">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
