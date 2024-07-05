import React, { useState } from "react";
import { Car_Data } from "../images/cars-big/car-assets";
import CarBox from "./CarBox";

const PickCar = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  console.log(selectedCar);
  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-content">
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
          <div className="pick-content__car">
            <div className="pick-content__car__name">
              <button
                className={selectedCar === 0 ? "active-button" : ""}
                onClick={() => setSelectedCar(0)}
              >
                Audi A1 S-Line
              </button>
              <button
                className={selectedCar === 1 ? "active-button" : ""}
                onClick={() => setSelectedCar(1)}
              >
                VW Golf 6
              </button>
              <button
                className={selectedCar === 2 ? "active-button" : ""}
                onClick={() => setSelectedCar(2)}
              >
                Toyota Camry
              </button>
              <button
                className={selectedCar === 3 ? "active-button" : ""}
                onClick={() => setSelectedCar(3)}
              >
                BMW 320 ModernLine
              </button>
              <button
                className={selectedCar === 4 ? "active-button" : ""}
                onClick={() => setSelectedCar(4)}
              >
                Mercedes-Benz GLK
              </button>
              <button
                className={selectedCar === 5 ? "active-button" : ""}
                onClick={() => setSelectedCar(5)}
              >
                VW Passat CC
              </button>
            </div>
            <CarBox data={Car_Data[selectedCar]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickCar;
