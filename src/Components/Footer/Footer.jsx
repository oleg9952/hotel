import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_social}>
                <div className={styles.social_icons}>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p>
                    &#9400; 2020 <span className={styles.title}>Hotel</span>. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
