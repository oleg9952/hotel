import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Filter from './Filter'
import Sort from './Sort'
import Pagination from './Pagination'
import BookingModal from '../../Modals/BookingModal/BookingModal'
import Search from './Search/Search'
import './Rooms.css'

const Rooms = () => {
    const [toggleFilters, setToggleFilters] = useState(false)
    const { 
        rooms, 
        currentPage, 
        roomsPerPage 
    } = useSelector(state => state.roomsReducers)

    const indexOfLastRoom = currentPage * roomsPerPage
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom)    

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
                            currentRooms.length !== 0 ?
                            currentRooms.map(room => (
                                <Card 
                                    key={room.id}
                                    room={room}
                                />
                            )) : ''
                        }
                    </div>
                    <Pagination 
                        currentPage={currentPage}
                        roomsPerPage={roomsPerPage}
                        totalOfRooms={rooms.length}
                    />
                </div>
                <div className={`filter_toggle ${toggleFilters ? 'active' : ''}`}
                    onClick={handleFiltersMobile}
                >
                    <i className="fas fa-filter"></i>
                </div>
            </div>
            <BookingModal />
            <Search />
        </div>
    )
}

export default Rooms