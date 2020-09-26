import React from 'react';
import styles from './Charts.module.css';
import ChartItems from './ChartItems/ChartItems';

class Charts extends React.Component{
    render(){
        const tracks = this.props.chartItems.map(el => {
            return  <ChartItems
                        key={el.rank}
                        rank={el.rank}
                        title={el.title}
                        artist={el.artist}
                        image={el.cover}
                        positionLastWeek = {isNaN(el.position.positionLastWeek)? 'NA': el.position.positionLastWeek}
                        peakPosition = {el.position.peakPosition}
                        weeksOnChart = {el.position.weeksOnChart}
                    />
        })
        
        return(
            <div className={styles.Charts}>
                <h1 className={styles.ChartTitle}>{this.props.chartName}</h1>
                <div className={styles.Tracks}>
                    <div className={styles.TracksHeader}>
                        <p>Name</p>
                        <span className={styles.TracksPosition}>
                            <p>PeakPosition</p>
                            <p>PositionLastWeek</p>
                            <p>WeeksOnChart</p>
                        </span>
                    </div>
                    {tracks}
                </div>
            </div>
        )
    }
};

export default Charts;