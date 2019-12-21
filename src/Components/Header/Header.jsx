import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import DesktopNav from '../Navigation/Desktop/Nav'
import MobileNav from '../Navigation/Mobile/Nav'
import { animateIntro } from '../../store/actions/navActions'

const Header = () => {
    const animIntro = useSelector(state => state.navReducers.intro)
    const dispatch = useDispatch()
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
            dispatch(animateIntro())
        }, delay)
    }
    
    useEffect(() => {
        delayHeaderBody(4500)
    }, [])

    return (
        <div className="header">
            
            <div className="header_intro">
                <p className="intro_title">Welcome to Hotel</p>
                <p className="intro_subtitle">Some title below</p>
            </div>
            <div className="header_body" style={{display: animIntro ? 'block' : 'none'}}>
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
            </div>
            <MobileNav />
            <DesktopNav />
        </div>
    )
}

export default Header
