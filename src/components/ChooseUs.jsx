import React from "react";
import MainImg from "../images/chooseUs/main.png";
import Icon1 from "../images/chooseUs/icon1.png";
import Icon2 from "../images/chooseUs/icon2.png";
import Icon3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

const ChooseUs = () => {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="choose-container">
          <div className="choose-container__img">
            <img src={MainImg} alt="An image with 3 cars" />
          </div>
          <div className="choose-container__text">
            <div className="choose-container__text__left">
              <h3>Why Choose Us</h3>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button>
                Find Details <IconChevronRight />{" "}
              </button>
            </div>
            <div className="choose-container__text__right">
              <div className="choose-container__text__right__box">
                <div>
                  <img src={Icon1} aria-hidden="true" />
                </div>
                <div>
                  <h4>Cross Country Drive</h4>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="choose-container__text__right__box">
                <div>
                  <img src={Icon2} aria-hidden="true" />
                </div>
                <div>
                  <h4>All Inclusive Pricing</h4>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="choose-container__text__right__box">
                <div>
                  <img src={Icon3} aria-hidden="true" />
                </div>
                <div>
                  <h4>No Hidden Charges</h4>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
