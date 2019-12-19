import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import './Header.css'
import Nav from '../Navigation/Desktop/Nav'

const Header = () => {
    const [animTransition, setAnimTransition] = useState(true)
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
        swipe: false
    }

    const delayHeaderBody = (delay) => {
        setTimeout(() => {
            setAnimTransition(true)
        }, delay)
    }

    useEffect(() => {
        delayHeaderBody(4500)
    }, [])

    return (
        <div className="header">
            {/* <div className="header_intro">
                <p className="intro_title">Welcome to Hotel</p>
                <p className="intro_subtitle">Some title below</p>
            </div> */}
            <div className="header_body" style={{display: animTransition ? 'block' : 'none'}}>
                <Slider className="header_slider" {...settings}>
                    <div className="slide-one">
                        <div className="slide_title">
                            <p>Slide Title 1</p>
                        </div>
                    </div>
                    <div className="slide-two">
                        <div className="slide_title">
                            <p>Slide Title 2</p>
                        </div>
                    </div>
                    <div className="slide-three">
                        <div className="slide_title">
                            <p>Slide Title 3</p>
                        </div>
                    </div>
                </Slider>
                <Nav />
            </div>
        </div>
    )
}

export default Header
