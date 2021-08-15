import React from 'react'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Project = () => {

    const data = [
        {
            name : 'UMIX',
            livelink : 'https://umix.herokuapp.com/',
            gitlink : 'https://github.com/saurabhkumar23/umix',
            img : '/images/umix.png',
            created : 'November 2020',
            desc : 'A social networking application providing features similar to instagram.',
            stacks : ['Mongoose','Express','NodeJs','MaterializeCss']
        },
        {
            name : 'AWESOME BOTS',
            livelink : 'https://saurabhkumar23.github.io/Awesome-Bots/',
            gitlink : 'https://github.com/saurabhkumar23/Awesome-Bots',
            img : '/images/automation.png',
            created : 'March 2021',
            desc : 'Automation scripts which helps to speed up common tasks to lift productivity. visit github to read more about those tools.',
            stacks : ['Puppeteer','Html','NodeJs','Css']
        },
        {
            name : 'MEME GENERATOR',
            livelink : 'https://saurabhkumar23.github.io/meme-generator/',
            gitlink : 'https://github.com/saurabhkumar23/meme-generator',
            img : '/images/meme.png',
            created : 'June 2021',
            desc : 'A flexible meme generating web application.',
            stacks : ['CanvasAPI','JavaScript','Html','Css','Web speech API','Full screen API']
        },
        {
            name : 'WINUX',
            livelink : 'https://github.com/saurabhkumar23/winux',
            gitlink : 'https://github.com/saurabhkumar23/winux',
            img : '/images/winux.png',
            created : 'January 2021',
            desc : 'A NodeJs script which allows us to run bash like commands on windows operating system.',
            stacks : ['NodeJS','Bash','JavaScript']
        }
    ]

    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
    );
};

export default Project
