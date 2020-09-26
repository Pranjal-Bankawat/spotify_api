import React from 'react';
import DashboardIcon from '../../assets/svg/home.svg';
import ArtistsIcon from '../../assets/svg/artist.svg';
import AlbumsIcon from '../../assets/svg/albums.svg';
import GenresIcon from '../../assets/svg/genres.svg';
import PlaylistIcon from '../../assets/svg/playlist.svg';
import ChartsIcon from '../../assets/svg/charts.svg';
import styles from "./SideNav.module.css";

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class SideNav extends React.Component{
    constructor(props){
        super(props);
        if(props.token){
            spotifyApi.setAccessToken(props.token);
        }
        this.state = {
            userPlaylists: []
        }
    }
    componentDidMount(){
        spotifyApi.getUserPlaylists('daycgoupg44177o47k3r3gryg').then(response => {
           this.setState({userPlaylists: response.items});
        });
    }
    render() {      
        const playlistItems = this.state.userPlaylists.map(el => {
            return  <p 
                        key={el.id}
                        onClick={() => this.props.changePlaylist(el.id)}
                    >{el.name}</p>
        })
        return(
            <div className={styles.SideNav}>
                <div className={styles.SideNavHeader}>
                    <span className={styles.Browse}><p>Browse</p></span>
                    <span className={styles.Queue}><p>Queue</p></span>
                </div>
                <div className={styles.SideNavBody}>
                    <div className={styles.Dashboard} onClick={() => this.props.changeActiveLink('dashboard')}>
                        <span className={styles.LinkActive} style={this.props.activeLink==='dashboard'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        <span className={styles.LinkInactive}>
                            <img src={DashboardIcon} alt="DashboardIcon"/>
                            <p>Dashboard</p>
                        </span>
                        <span className={styles.LinkHover} style={this.props.activeLink==='dashboard'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                    </div>
                    <div className={styles.Tracks} onClick={() => this.props.changeActiveLink('tracks')}>
                        <span className={styles.LinkActive} style={this.props.activeLink==='tracks'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        <span className={styles.LinkInactive}>
                            <img src={AlbumsIcon} alt="AlbumsIcon"/>
                            <p>Tracks</p>
                        </span>
                        <span className={styles.LinkHover} style={this.props.activeLink==='tracks'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                    </div>
                    <div className={styles.Artists} onClick={() => this.props.changeActiveLink('artists')}>
                        <span className={styles.LinkActive} style={this.props.activeLink==='artists'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        <span className={styles.LinkInactive}>
                            <img src={ArtistsIcon} alt="ArtistsIcon"/>
                            <p>Artists</p>
                        </span>
                        <span className={styles.LinkHover} style={this.props.activeLink==='artists'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                    </div>
                    <div className={styles.Genres} onClick={() => this.props.changeActiveLink('genres')}>
                        <span className={styles.LinkActive} style={this.props.activeLink==='genres'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        <span className={styles.LinkInactive}>
                            <img src={GenresIcon} alt="GenresIcon"/>
                            <p>Genres</p>
                        </span>
                        <span className={styles.LinkHover} style={this.props.activeLink==='genres'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                    </div>
                    <hr style={{height: '2px',backgroundColor: '#373737',border: 'none'}} />
                    <div className={styles.Playlist} onClick={() => this.props.changeActiveLink('playlist')}>
                        <span className={styles.LinkInactive}>
                            <span className={styles.LinkActive} style={this.props.activeLink==='playlist'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                            <img src={PlaylistIcon} alt="PlaylistIcon"/>
                            <p>Playlist</p>
                            <span className={styles.LinkHover} style={this.props.activeLink==='playlist'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        </span>
                        <span className={styles.PlaylistItems}>
                            {playlistItems}
                        </span>
                    </div>
                    <hr style={{height: '2px',backgroundColor: '#373737',border: 'none'}} />
                    <div className={styles.Charts} onClick={() => this.props.changeActiveLink('charts')}>
                        <span className={styles.LinkInactive}>
                            <span className={styles.LinkActive} style={this.props.activeLink==='charts'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                            <img src={ChartsIcon} alt="ChartsIcon"/>
                            <p>Charts</p>
                            <span className={styles.LinkHover} style={this.props.activeLink==='charts'?{visibility: 'visible'}: {visibility:'hidden'}}></span>
                        </span>
                        <span className={styles.ChartItems}>
                            <p onClick={() => this.props.changeChart('hot 100','Billboard Hot 100')}>Billboard Hot 100</p>
                            <p onClick={() => this.props.changeChart('Artist 100','Top Artists')}>Top Artists</p>
                            <p onClick={() => this.props.changeChart('Billboard 200','Top Albums')}>Top Albums</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};

export default SideNav;