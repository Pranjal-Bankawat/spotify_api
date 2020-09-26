import React from 'react';
import styles from './Dashboard.module.css';
import Category from './Category/Category';
import SpotifyWebApi from 'spotify-web-api-js';
import Loader from '../../UI/Loader/Loader';

const spotifyApi = new SpotifyWebApi();

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        if(props.token){
            spotifyApi.setAccessToken(props.token);
        }
        this.state={
            recentTracks: [],
            favArtists: [],
            favTracks: [],
            show: false
        }
    }

    populateData = async (cb) => {
        let recentlyPlayed,topTracks,topArtists;

        recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks().then(response => {
            return response.items.map(el => {
                return el.track;
            });
        });

        topArtists = await spotifyApi.getMyTopArtists({time_range: 'short_term',limit: 10}).then(response => {
            return response.items;
        });
        
        topTracks = await spotifyApi.getMyTopTracks({time_range: "short_term",limit: 10}).then(response => {
            return response.items.map(el => {
                return el;
            });
        });

        this.setState({
            recentTracks: recentlyPlayed, 
            favArtists: topArtists, 
            favTracks: topTracks
        },cb);
    }

    componentDidMount(){
        this.populateData(() => {
            this.setState({show: true});
        });
    }

    render(){
        let pageContent = (
            this.state.show ?   <div className={styles.Dashboard}>
                                    <Category title={'Recently Played'} data={this.state.recentTracks}/>
                                    <Category title={'Your Favourite Tracks'} data={this.state.favTracks}/>
                                    <Category title={'Your Favourite Artists'} data={this.state.favArtists}/>
                                </div>
            : <div className={styles.Dashboard}><Loader /></div>
        )
        return(
            pageContent
        )
    }
}

export default Dashboard;