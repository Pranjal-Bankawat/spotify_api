import React from 'react';
import styles from './Tracks.module.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Loader from '../../UI/Loader/Loader';

const spotifyApi = new SpotifyWebApi();

class Tracks extends React.Component{
    constructor(props){
        super(props);
        if(props.token){
            spotifyApi.setAccessToken(props.token);
        }
        this.state={
            tracks: [],
            show: false
        }
    }

    populateData = (cb) => {
        spotifyApi.getMyTopTracks({time_range: 'short_term',limit: 50}).then(response => {
            return response.items.map(el => {
                return el;
            });
        }).then(result => {
            this.setState({tracks: result},cb);
        })
    }

    componentDidMount(){
        this.populateData(() => {
            this.setState({show: true});
        });
    }

    render() {
        let items = [];
        if(this.state.tracks.length)
            items = this.state.tracks.map(el => {
                return  <div key={el.id} className={styles.Item}>
                            <img alt={el.album.images[0].url} src={el.album.images[0].url}/>
                            <p>{el.name}</p>
                        </div>
            });
        return( this.state.show ?<div className={styles.Tracks}>
                                    <h1 className={styles.PageTitle}>Tracks Of Your Interest:</h1>
                                    <div className={styles.PageItems}>
                                        {items}
                                    </div>
                                </div> 
                :<div className={styles.Tracks}><Loader /></div>
            
        )
    }
}

export default Tracks;