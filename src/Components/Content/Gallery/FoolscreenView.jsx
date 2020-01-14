import React, { useState } from 'react'
import styles from './Gallery.module.css'

const FoolscreenView = ({ currentView, view, closeView }) => {
    const {
        id,
        imgBaseUrl,
        img
    } = currentView

    const [ currentImg, setCurrentImg ] = useState(id)

    const handlePrev = () => {
        if(currentImg !== 1) {
            setCurrentImg(currentImg - 1)
        }
    }
    const handleNext = () => {
        if(currentImg !== 40) {
            setCurrentImg(currentImg + 1)
        }
    }

    return (
        <div className={`${styles.foolscreen_view} ${view ? styles.active : ''}`}>
            <div className={styles.close_btn} onClick={closeView}>
                <div></div>
                <div></div>
            </div>
            <div className={`${styles.view_img} ${styles.active}`} 
                style={{ backgroundImage: `url(${imgBaseUrl + currentImg}/${img[0]})` }}
            >
                <div className={styles.prev} onClick={handlePrev}></div>
                <div className={styles.next} onClick={handleNext}>
                    
                </div>
            </div>   
        </div>
    )
}

export default FoolscreenView
