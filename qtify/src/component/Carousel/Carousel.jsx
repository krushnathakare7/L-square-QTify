import React from "react";
import SongCard from "../SongCard/SongCard";
import styles from "./Carousel.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel({data}) {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={7}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{ // Ensure the navigation module is enabled
                    nextEl: `.${styles.customNextButton}`,
                    prevEl: `.${styles.customPrevButton}`,
                }}
            >

            <div className={styles.main}>
               {/* { <SwiperSlide>Slide 1</SwiperSlide> */
                
                    data.map((ele, index) => <SwiperSlide key={index}> <SongCard image={ele.image} title={ele.title} follow={ele.follows} key={ele.id}/></SwiperSlide>)

               }
            </div>
               
                

                {/* Navigation buttons */}
                <div className={styles.customPrevButton}></div>
                <div className={styles.customNextButton}></div>
            </Swiper>
        </div>
    )
}
