import React from "react";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

const PlanTrip = () => {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-content">
          <div className="plan-content__title">
            <h3>Plan your trip now</h3>
            <h2>Quick & easy car rental</h2>
          </div>
          <div className="plan-content__cards">
            <div className="plan-content__cards__content">
              <img src={SelectCar} alt="select car" />
              <h3>Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-content__cards__content">
              <img src={Contact} alt="contatct operator" />
              <h3>Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="plan-content__cards__content">
              <img src={Drive} alt="let's drive" />
              <h3>Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
