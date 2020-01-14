import React from 'react'
import styles from './Gallery.module.css'

const Card = ({ room, handleCurrentView }) => {
    const {
        id,
        imgBaseUrl,
        img
    } = room

    return (
        <div className={styles.card} onClick={handleCurrentView.bind(this, {
            id,
            imgBaseUrl,
            img
        })}>
            <div className={styles.img}
                style={{ backgroundImage: `url(${imgBaseUrl + id}/${img[0]})` }}
            ></div>            
        </div>
    )
}

export default Card
