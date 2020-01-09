import React from 'react'
import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.cssload_loader}>
            <div className={`${styles.cssload_inner} ${styles.cssload_one}`}></div>
            <div className={`${styles.cssload_inner} ${styles.cssload_two}`}></div>
            <div className={`${styles.cssload_inner} ${styles.cssload_three}`}></div>
        </div>
    )
}

export default Spinner