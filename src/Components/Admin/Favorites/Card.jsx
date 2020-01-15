import React from 'react'
import styles from './Favorites.module.css'

const Card = () => {
    return (
        <div className={styles.card}>
            <p className={styles.card_title}>Room name</p>
            <div className={`${styles.status}`}>
                Avaliable
            </div>
        </div>
    )
}

export default Card
