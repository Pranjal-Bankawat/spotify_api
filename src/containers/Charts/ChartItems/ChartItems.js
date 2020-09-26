import React from 'react';
import styles from './ChartItem.module.css';

const chartItems = props => {
    return(
        <div className={styles.Track}>
            <span className={styles.TrackDetailsContainer}>
                <span className={styles.TrackDetails}>
                    <p className={styles.TrackNumber}># {props.rank}</p>
                    <img className={styles.TrackImage} alt="icon" src={props.image}/>
                    <span className={styles.Details}>
                        <p className={styles.TrackTitle}>{props.title}</p>
                        <p className={styles.TrackAlbum}>{props.artist}</p>
                    </span>
                </span>
            </span>
            <span className={styles.Position}>
                <p>{props.peakPosition}</p>
                <p>{props.positionLastWeek}</p>
                <p>{props.weeksOnChart}</p>
            </span>
        </div>
    )
}

export default chartItems;