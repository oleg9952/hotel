import React from 'react'
import Card from './Card'
import Filter from './Filter'
import './Rooms.css'

const Rooms = () => {
    return (
        <div className="rooms">
            <div className="content">
                <div className="rooms_column">
                    <Filter />
                </div>
                <div className="rooms_column">
                    <div className="cards_holder">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms