import React from 'react';
import styles from './Loader.module.css'

const loader = () => {
    return(
        <div className={styles.Loader}>
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <span>Loading</span>
            </div>
        </div>
    )
}

export default loader;