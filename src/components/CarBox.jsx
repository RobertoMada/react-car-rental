import React from "react";

const CarBox = ({ data }) => {
  return (
    <>
      <div className="car-box__image">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="car-box__details">
        <div className="car-box__details__price">
          <p>
            ${data.price} <span>/ per day</span>
          </p>
        </div>
        <div className="car-box__details__col">
          <span>Model</span>
          <span>{data.model}</span>
        </div>
        <div className="car-box__details__col">
          <span>Mark</span>
          <span>{data.mark}</span>
        </div>
        <div className="car-box__details__col">
          <span>Year</span>
          <span>{data.year}</span>
        </div>
        <div className="car-box__details__col">
          <span>Doors</span>
          <span>{data.doors}</span>
        </div>
        <div className="car-box__details__col">
          <span>AC</span>
          <span>{data.air}</span>
        </div>
        <div className="car-box__details__col">
          <span>Transmission</span>
          <span>{data.transmission}</span>
        </div>
        <div className="car-box__details__col">
          <span>Fuel</span>
          <span>{data.fuel}</span>
        </div>
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default CarBox;
