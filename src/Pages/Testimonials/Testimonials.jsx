import React, { useState, useEffect } from "react";
import './Testimonials.css';
import TestimonialCard from "./TestimonialCard";
import {Pagination,Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'

const Testimonials = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('reviews.json')
            .then(res=>res.json())
            .then(data=>{
                setReviews(data);
            })
    },[])

    return (
      <section className="section container testimonials ">
        <h2 className="section_title">Praise and Feedback</h2>
        <Swiper
          className="testimonials_container grid lg:w-3/5 mx-auto"
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard review={review}></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonials;