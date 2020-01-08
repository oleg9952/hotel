import React from 'react'
import WhyUs from './WhyUs'
import FeedBack from './FeedBack'
import Titles from './TItles/Titles'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <FeedBack />
            <WhyUs />
            <Titles />
        </div>
    )
}

export default Home
