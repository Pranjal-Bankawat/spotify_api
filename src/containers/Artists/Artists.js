import React from 'react';
import styles from './Artists.module.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Loader from '../../UI/Loader/Loader';

const spotifyApi = new SpotifyWebApi();

class Artits extends React.Component{
    constructor(props){
        super(props);
        if(props.token){
            spotifyApi.setAccessToken(props.token);
        }
        this.state={
            artists: [],
            show: false
        }
    }

    populateData = (cb) => {
        spotifyApi.getMyTopArtists({time_range: 'short_term',limit: 50}).then(response => {
            return response.items.map(el => {
                return el;
            });
        }).then(result => {
            this.setState({artists: result},cb);
        })
    }

    componentDidMount(){
        this.populateData(() => {
            this.setState({show: true});
        });
    }

    render() {
        let items = this.state.artists.map(el => {
            return  <div key={el.id} className={styles.Item}>
                        <img alt={el.images[0].url} src={el.images[0].url}/>
                        <p>{el.name}</p>
                    </div>
        });
        return( this.state.show ?<div className={styles.Artists}>
                                    <h1 className={styles.PageTitle}>Artists You Might Like:</h1>
                                    <div className={styles.PageItems}>
                                        {items}
                                    </div>
                                </div> 
                :<div className={styles.Artists}><Loader /></div>
            
        )
    }
}

export default Artits;