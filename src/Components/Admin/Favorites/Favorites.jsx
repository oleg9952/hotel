import React from 'react'
import styles from './Favorites.module.css'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../Spinner/Spinner'

const Favorites = () => {
    const { favorites } = useSelector(state => state.favoritesReducers)
    const { rooms } = useSelector(state => state.roomsReducers)

    const getFavs = () => {
        if(favorites) {
            let data = []
            rooms.forEach(room => {
                if(favorites.indexOf(room.id) !== -1) {
                    data.push(room)
                }
            })
            return data
        }
    }

    return (
        <div className={styles.favorites}>
            <h1 className={styles.favorites_title}>My Favorites</h1>
            <div className={styles.favorites_holder}>
                {
                    favorites ?
                    getFavs().map(fav => (
                        <Card 
                            key={fav.id}
                            fav={fav}
                        />
                    )) : ''
                }
            </div>
        </div>
    )
}

export default Favorites