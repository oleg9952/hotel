import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Filter from './Filter'
import Sort from './Sort'
import Pagination from './Pagination'
import BookingModal from '../../Modals/BookingModal/BookingModal'
import Search from './Search/Search'
import './Rooms.css'
import Spinner from '../../Spinner/Spinner'

const Rooms = () => {
    const [toggleFilters, setToggleFilters] = useState(false)
    const { 
        rooms, 
        currentPage, 
        roomsPerPage 
    } = useSelector(state => state.roomsReducers)
    
    // ------- FILTERING -------
    const { data, filtered } = useSelector(state => state.roomsReducers)

    const getNumberOfFiltered = (filteredBy) => {
        return rooms.filter(room => room.type === filteredBy).length
    }

    const toggleData = (root, filtered) => {
        if(filtered) {
            return filtered
        } else {
            return root
        }
    }

    const resetCurrentPage = (reset, current) => {
        if(filtered) {
            return reset
        } else {
            return current
        }
    }

    const getRoomsPerPage = (perPage, filtered) => {
        if(filtered) {
            return filtered.length
        } else {
            return perPage
        }
    }

    // ------- PAGINATION -------

    const indexOfLastRoom = resetCurrentPage(1, currentPage) * getRoomsPerPage(roomsPerPage, data)
    const indexOfFirstRoom = indexOfLastRoom - getRoomsPerPage(roomsPerPage, data)
    const currentRooms = toggleData(rooms, data).slice(indexOfFirstRoom, indexOfLastRoom)    

    const handleFiltersMobile = () => setToggleFilters(!toggleFilters)


    return (
        <div className="rooms">
            <div className="content">
                <div className="rooms_column">
                    <Filter 
                        toggleFilters={toggleFilters}
                        //--- FILTERING ---
                        getNumberOfFiltered={getNumberOfFiltered}
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
                            )) : (
                                <div className="loader_holder">
                                    <Spinner />
                                </div>
                            )
                        }
                    </div>
                    {
                        currentRooms.length !== 0 ?
                        <Pagination 
                            currentPage={currentPage}
                            roomsPerPage={roomsPerPage}
                            totalOfRooms={rooms.length}
                            filtered={filtered}
                        /> : ''
                    }
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