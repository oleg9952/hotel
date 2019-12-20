import React from 'react'
import BookingWidget from './BookingWidget'
import WhyUs from './WhyUs'
import FeedBack from './FeedBack'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <BookingWidget />
            <WhyUs />
            <FeedBack />
        </div>
    )
}

export default Home
