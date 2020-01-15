import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAdmin } from '../../../store/actions/adminActions'
import { updateFavorites } from '../../../store/actions/favoritesActions'
import { Link } from 'react-router-dom'
import styles from './Favorites.module.css'

const Card = (props) => {
    const dispatch = useDispatch()
    const { favorites } = useSelector(state => state.favoritesReducers)
    const { user } = useSelector(state => state.authReducers)
    const { id, name, imgBaseUrl, img, reserved } = props.fav  
    
    const removeFav = () => {
        let filtered = favorites.filter(fav => fav !== id)
        dispatch(updateFavorites(
            { ids: [...filtered] },
            user.uid
        ))
    }

    return (
        <div className={styles.card} 
            style={{ backgroundImage: `url(${imgBaseUrl + id}/${img[0]})` }}
        >
            <div className={styles.remove_fav} onClick={removeFav}>
                <div></div>
                <div></div>
            </div>
            <p className={styles.card_title}>
                <Link to={`/rooms/${id}`} onClick={() => dispatch(toggleAdmin())}>
                { name }
                </Link>
            </p>
            <div className={`${styles.status} ${reserved ? styles.reserved : ''}`}>
                { reserved ? 'Reserved' : 'Avaliable' }
            </div>
        </div>
    )
}

export default Card
