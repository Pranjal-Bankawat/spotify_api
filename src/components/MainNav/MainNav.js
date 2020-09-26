import React from "react";
import Logo from '../../assets/svg/logo.svg';
import NotificationsIcon from '../../assets/svg/notifications.svg';
import SearchIcon from '../../assets/svg/search.svg';
import FriendsIcon from '../../assets/svg/friends.svg';
import styles from './MainNav.module.css';

const mainNav = props => {
    return(
        <div className={styles.MainNav}>
            <div className={styles.Left}>
                <span className={styles.LogoContainer}><img src={Logo} alt="Logo"/></span>
            </div>
            <div className={styles.Right}>
                <span className={styles.Search}><img src={SearchIcon} alt="SearchIcon"/></span>
                <span className={styles.Notifications}><img src={NotificationsIcon} alt="NotificationsIcon"/></span>
                <span className={styles.Friends}><img src={FriendsIcon} alt="FriendsIcon"/></span>
            </div>
        </div>
    )
};

export default mainNav;