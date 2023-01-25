import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

// import required modules
import { Pagination } from "swiper";

const Home = () => {
    return (
        <div className='text-white mt-4'>
            <h1 className='text-[22px] capitalize'>pabna polytechnic institute</h1>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/03/awesome_photo_collage_cover.jpg?w=960&h=600&crop=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/03/awesome_photo_collage_cover.jpg?w=960&h=600&crop=1" alt="" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Home;