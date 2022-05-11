import React from 'react'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Project = () => {

    const data = [
        {
            name : 'MEME STUDIO',
            livelink : 'https://saurabhkumar23.github.io/meme-studio/',
            gitlink : 'https://github.com/saurabhkumar23/meme-studio',
            img : '/images/meme.png',
            created : 'June 2021',
            desc : 'A flexible meme generating web application using Html Canvas.',
            stacks : ['CanvasAPI','JavaScript','Html','Css','Web speech API','Full screen API']
        },
        {
            name : 'AWESOME BOTS',
            livelink : 'https://saurabhkumar23.github.io/Awesome-Bots/',
            gitlink : 'https://github.com/saurabhkumar23/Awesome-Bots',
            img : '/images/automation.png',
            created : 'March 2021',
            desc : 'Automation scripts which helps to speed up common tasks to lift productivity.',
            stacks : ['Puppeteer','Html','NodeJs','Css']
        },
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
            name : 'EXCEL SOFT',
            livelink : 'https://saurabhkumar23.github.io/excel-soft/',
            gitlink : 'https://github.com/saurabhkumar23/excel-soft',
            img : '/images/winux.png',
            created : 'FEBRUARY 2021',
            desc : 'A JavaScript Application which provide functionalities similar to excel software.',
            stacks : ['HTML','CSS','JavaScript']
        }
    ]

    return (
        <section id='project'>
        <div className="heading">PROJECTS</div>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }}
        breakpoints={{
            "0": {
                "slidesPerView": 1,
                "spaceBetween": 20
            },
            "480": {
                "slidesPerView": 2,
                "spaceBetween": 20
            },
            "992": {
                "slidesPerView": 3,
                "spaceBetween": 40
            }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {
                data.map((project) => (
                    <SwiperSlide>
                        <div className='card-container'>
                            <a href={project.gitlink} style={{'textDecoration':'none'}} target='_blank'>
                                <div className='image'><img src={project.img}/></div>
                                <div className='content'>
                                    <div className='name'>{project.name}</div>
                                    <div className='created'>{project.created}</div>
                                    <div className='desc'>{project.desc}</div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </section>
    );
};

export default Project
