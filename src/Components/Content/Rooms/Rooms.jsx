import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Filter from './Filter'
import Sort from './Sort'
import './Rooms.css'

const Rooms = () => {
    const { rooms } = useSelector(state => state.roomsReducers)
    const [toggleFilters, setToggleFilters] = useState(false)


    const handleFiltersMobile = () => setToggleFilters(!toggleFilters)

    return (
        <div className="rooms">
            <div className="content">
                <div className="rooms_column">
                    <Filter 
                        toggleFilters={toggleFilters}
                    />
                </div>
                <div className="rooms_column">
                    <Sort />
                    <div className="cards_holder">
                        {
                            rooms.length !== 0 ?
                            rooms.map(room => (
                                <Card 
                                    key={room.id}
                                    room={room}
                                />
                            )) : ''
                        }
                        {/* <Card /> */}
                    </div>
                </div>
                <div className={`filter_toggle ${toggleFilters ? 'active' : ''}`}
                    onClick={handleFiltersMobile}
                >
                    <i className="fas fa-filter"></i>
                </div>
            </div>
        </div>
    )
}

export default Rooms