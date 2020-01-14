import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import styles from './Gallery.module.css'
import Spinner from '../../Spinner/Spinner'
import FoolscreenView from './FoolscreenView'

const Gallery = () => {
    const { rooms } = useSelector(state => state.roomsReducers)

    //------- CONTENT LIMITER -------
    const [ visibleImgs ] = useState(1)
    const [ imgsPerPage, setImgsPerPage ] = useState(9)

    const indexOfLastImg = visibleImgs * imgsPerPage
    const indexOfFirstImg = indexOfLastImg - imgsPerPage
    // const totalOfPages = Math.ceil(rooms.length / imgsPerPage)
    const currentImgs = rooms.slice(indexOfFirstImg, indexOfLastImg)

    const showMore = () => setImgsPerPage(imgsPerPage + 9)

    //------- FOOLSCREEN VIEW -------

    const [ currentView, setCurrentView ] = useState(null)
    const [ view, setView ] = useState(false)

    const handleCurrentView = room => {
        setCurrentView(room)
        setTimeout(() => setView(true), 100)
    }

    const closeView = () => {
        setCurrentView(null)
        setView(false)
    }

    return (
        <div className={styles.gallery}>
            <h1 className={styles.gallery_title}>Gallery</h1>
            <div className={styles.gallery_holder}>
                {
                    currentImgs.length !== 0 ?
                    currentImgs.map(room => (
                        <Card
                            key={room.id} 
                            room={room}
                            handleCurrentView={handleCurrentView}
                        />
                    )) : (
                        <div className={styles.loader_holder}>
                            <Spinner />
                        </div>
                    )
                }
            </div>
            {
                imgsPerPage <= rooms.length && currentImgs.length !== 0 ? (
                    <button onClick={showMore}>Show More</button>
                ) : ''
            }
            {
                currentView ?
                <FoolscreenView 
                    currentView={currentView}
                    view={view}
                    closeView={closeView}
                /> : ''
            }
        </div>
    )
}

export default Gallery
