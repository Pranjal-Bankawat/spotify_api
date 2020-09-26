import React from 'react';
import LikeIcon from "../../assets/svg/like.svg";
import ForwardIconBlack from "../../assets/svg/forward-black.svg";
import DeleteIcon from "../../assets/svg/delete.svg";
import styles from "./PlaylistItem.module.css";

const playlistItem = props => {
    return(
        <div key={props.id} className={styles.Track}>
            <span>
                <span className={styles.TrackDetails}>
                    <p className={styles.TrackNumber}>{props.index+1}</p>
                    <img className={styles.TrackImage} alt="icon" src={props.image}/>
                    <span className={styles.Details}>
                        <p className={styles.TrackTitle}>{props.name}</p>
                        <p className={styles.TrackAlbum}>{props.albumName}</p>
                    </span>
                </span>
            </span>

            <ul className={styles.TrackOptions}>
                <li className={styles.TrackOption}><img alt="icon" src={LikeIcon}/></li>
                <li className={styles.TrackOption}><img alt="icon" src={ForwardIconBlack}/></li>
                <li className={styles.TrackOption}><img alt="icon" src={DeleteIcon}/></li>
            </ul>
        </div>
    )
};

export default playlistItem;