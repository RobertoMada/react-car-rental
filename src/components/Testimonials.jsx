import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../assets/testimonials";
import { IconQuote } from "@tabler/icons-react";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  const reviews = testimonials.map((item, index) => {
    return (
      <div className="testimonial-content__box" key={index}>
        <p className="testimonial-content__box__review">{item.review}</p>
        <div className="testimonial-content__box__user">
          <img src={item.img} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.location}</p>
            <span>
              <IconQuote width={60} height={60} />
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-content__title">
            <h3>Reviewed by People</h3>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <Slider {...settings}>{reviews}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
