import React, { useEffect, useState } from "react";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero//main-car.png";
import { IconCircleCheck, IconChevronRight } from "@tabler/icons-react";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onScrollPage = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };

    window.addEventListener("scroll", onScrollPage);

    return () => {
      window.removeEventListener("scroll", onScrollPage);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape} alt="background shape" />

        <div className="hero-content">
          <div className="hero-content__text">
            <h3>Plan your trip now</h3>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-content__text__buttons">
              <button className="hero-content__text__buttons__book-ride">
                Book Ride
                <IconCircleCheck width={24} height={24} />
              </button>
              <button className="hero-content__text__buttons__learn-more">
                Learn More
                <IconChevronRight width={24} height={24} />
              </button>
            </div>
          </div>
          <img
            src={HeroCar}
            alt="image with a red car"
            className="hero-content__car-img"
          />
        </div>
        <button
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "" : "hide-scroll"} `}
        >
          ^
        </button>
      </div>
    </section>
  );
};

export default Hero;
