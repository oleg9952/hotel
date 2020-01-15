import React from 'react'
import styles from './Favorites.module.css'
import Card from './Card'

const Favorites = () => {
    return (
        <div className={styles.favorites}>
            <h1 className={styles.favorites_title}>My Favorites</h1>
            <div className={styles.favorites_holder}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Favorites
