import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import styles from './Category.module.css';

class Category extends React.Component {
    componentDidMount(){
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 6.5,
            spaceBetween: 30,
            speed: 300,
            grabCursor: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        })
    };

    render(){
        let slides = this.props.data.map(el => {
            return  <div id={el.id} className={styles.SlideBody}>
                        <img 
                            alt={el.type==='artist' ? el.images[0].url: el.album.images[0].url} 
                            src={el.type==='artist' ? el.images[0].url: el.album.images[0].url}
                        />
                        <p>{el.name}</p>
                    </div>
        });

        return(
            <div className={styles.Category}>
                <h1 className={styles.CategoryTitle}>{this.props.title}</h1>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            {slides[0]}
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[1]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[2]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[3]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[4]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[5]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[6]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[7]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[8]}
                            </div>
                        </div>
                        <div className={`swiper-slide ${styles.SwiperSlide}`}>
                            <div className={styles.SlideBody}>
                                {slides[9]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Category;