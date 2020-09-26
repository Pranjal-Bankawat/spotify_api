import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Dashboard from '../Dashboard/Dashboard';
import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import Playlist from '../Playlist/Playlist';
import Charts from '../Charts/Charts';
import styles from './Main.module.css';

import { getChart } from 'billboard-top-100';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Main extends React.Component {
    constructor(props){
        super(props);
        if(props.token){
            spotifyApi.setAccessToken(props.token);
        }
        this.state = {
            activeLink: 'charts',
            token: this.props.token,
            playlist: {
                playlistName: '',
                playlistTracks: []
            },
            chart: {
                chartName: '',
                chartItems: []
            }
        }
    }
    
    activeLinkHandler = (linkId) => {
        if(linkId !== this.state.activeLink){
            this.setState({activeLink: linkId})
        }
    }

    activePagehandler = (activeLink) => {
        switch (activeLink) {
            case 'dashboard':
                return <Dashboard token={this.state.token}/>;
            case 'artists':
                return <Artists token={this.state.token} />;
            case 'tracks':
                return <Tracks token={this.state.token}/>;
            case 'playlist':
                return  <Playlist
                            playlistName={this.state.playlist.playlistName}
                            playlistTracks={this.state.playlist.playlistTracks}
                            token={this.state.token}
                        />;
            case 'charts':
                return  <Charts
                            chartName={this.state.chart.chartName}
                            chartItems={this.state.chart.chartItems}
                        />
            default:
                return <div>Wrong</div>
        }
    }

    activeChartHandler = (chartId,chartName) => {
        getChart(chartId,(err,res) => {
            const newChart = {chartName: chartName, chartItems: [...res.songs]}
            this.setState({chart: newChart});
        });
    }

    activePlaylistHandler = id => {
        spotifyApi.getPlaylist(id).then(res => {
            const playlist = res.tracks.items.map(el => {
                return el.track;
            });
            return {playlistName: res.name, playlistTracks: playlist}                
        }).then(result => {
            this.setState({playlist: result});
        });
    };
    
    render(){
        const activePage = this.activePagehandler(this.state.activeLink);
        return(
            <div className={styles.Main}>
                <SideNav token={this.state.token}
                    changePlaylist={(id) => this.activePlaylistHandler(id)}
                    changeActiveLink={(id) => this.activeLinkHandler(id)}
                    changeChart={(id,name) => this.activeChartHandler(id,name)}
                    activeLink={this.state.activeLink}
                />
                {activePage}
            </div> 
        )
    }
}

export default Main;