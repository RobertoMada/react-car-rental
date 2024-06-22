import React, { useState } from "react";
import {
  IconCar,
  IconMapPinFilled,
  IconCalendarEvent,
} from "@tabler/icons-react";
import BookModal from "./BookModal";
import { cars } from "../images/cars-big/car-assets";

const BookCar = () => {
  const [bookDetails, setBookDetails] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });

  let imgUrl;
  switch (bookDetails.carType) {
    case "Audi A1 S-Line":
      imgUrl = cars.CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = cars.CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = cars.CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = cars.CarBMW;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = cars.CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = cars.CarPassat;
      break;
    default:
      imgUrl = "";
  }

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(bookDetails).includes("")) {
      setError(true);
    } else {
      setError(false);
      setModal(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuccess(false);
    setBookDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <section className="book-section">
      <div className="container">
        {modal && (
          <BookModal
            image={imgUrl}
            {...bookDetails}
            closeModal={closeModal}
            OnSuccess={() => {
              setModal(false);
              setSuccess(true);
            }}
          />
        )}
        <div className="book-content">
          <h2>Book a car</h2>
          <p className={error && "book-content__error"}>
            All fields are required!
          </p>
          <p className={success && "book-content__succes"}>
            Check your email to confirm the order.
          </p>
          <form className="box-form" onSubmit={handleSubmit}>
            <div className="box-form__car-details">
              <label htmlFor="carType">
                <IconCar />
                Select Your Car Type
                <span>*</span>
              </label>
              <select
                id="carType"
                name="carType"
                value={bookDetails.carType}
                onChange={handleChange}
              >
                <option value="">Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
              </select>
            </div>
            <div className="box-form__car-details">
              <label htmlFor="pickUp">
                <IconMapPinFilled />
                Pick-up
                <span>*</span>
              </label>
              <select
                id="pickUp"
                name="pickUp"
                value={bookDetails.pickUp}
                onChange={handleChange}
              >
                <option value="">Select pick up location</option>
                <option value="Suceava">Suceava</option>
                <option value="Iasi">Iasi</option>
                <option value="Cluj-Napoca">Cluj-Napoca</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Constanta">Constanta</option>
              </select>
            </div>
            <div className="box-form__car-details">
              <label htmlFor="dropOf">
                <IconMapPinFilled />
                Drop-off
                <span>*</span>
              </label>
              <select
                id="dropOff"
                name="dropOff"
                value={bookDetails.dropOff}
                onChange={handleChange}
              >
                <option value="">Select drop off location</option>
                <option value="Suceava">Suceava</option>
                <option value="Iasi">Iasi</option>
                <option value="Cluj-Napoca">Cluj-Napoca</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Constanta">Constanta</option>
              </select>
            </div>
            <div className="box-form__car-time">
              <label htmlFor="pickTime">
                <IconCalendarEvent />
                Pick-up
                <span>*</span>
              </label>
              <input
                type="date"
                name="pickTime"
                id="pickTime"
                onChange={handleChange}
                value={bookDetails.pickTime}
                max={bookDetails.dropTime}
              />
            </div>
            <div className="box-form__car-time">
              <label htmlFor="dropTime">
                <IconCalendarEvent />
                Drop-off
                <span>*</span>
              </label>
              <input
                type="date"
                name="dropTime"
                id="dropTime"
                onChange={handleChange}
                value={bookDetails.dropTime}
                min={bookDetails.pickTime}
              />
            </div>
            <button>Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
