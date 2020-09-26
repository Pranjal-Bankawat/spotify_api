import React from 'react';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import ForwardIcon from "../../assets/svg/forward.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstaIcon from "../../assets/svg/instagram.svg";
import WhatsappIcon from "../../assets/svg/whatsapp.svg";
import OptionsIcon from "../../assets/svg/more-options.svg";
import Loader from '../../UI/Loader/Loader';
import styles from './Playlist.module.css';

class Playlist extends React.Component{
    state = {
        show: false
    }

    componentDidMount(){
        this.setState({show: true});
    }

    render() {
        const trackItems = this.props.playlistTracks.map((el,index) => {
            return  <PlaylistItem 
                        key={el.id} 
                        index={index} 
                        image={el.album.images[0].url} 
                        name={el.name}
                        albumName={el.album.name}
                    />
        });
        return(this.state.show ?   
                    <div className={styles.Playlist}>      
                        <div className={styles.PlaylistItem}>
                            <div className={styles.PlaylistHeader}>
                                <h1 className={styles.PlaylistTitle}>{this.props.playlistName}</h1>
                                <ul className={styles.PlaylistLinks}>
                                    <li className={styles.PlaylistLink}><img alt="icon" src={WhatsappIcon}/></li>
                                    <li className={styles.PlaylistLink}><img alt="icon" src={FacebookIcon}/></li>
                                    <li className={styles.PlaylistLink}><img alt="icon" src={InstaIcon}/></li>
                                    <li className={styles.PlaylistLink}><img alt="icon" src={ForwardIcon}/></li>
                                </ul>
                            </div>
                            <div className={styles.PlaylistTracks}>
                                <div className={styles.PlaylistOptions}>
                                    <button className={styles.PlayAllBtn}>Play All</button>
                                    <img alt="icon" src={OptionsIcon}/>
                                </div>
                                <div className={styles.Tracks}>
                                    {trackItems}
                                </div>
                            </div>
                        </div>
                    </div>
                :   <Loader />
        )
    }
}

export default Playlist;