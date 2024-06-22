import React, { useState } from "react";
import {
  IconX,
  IconInfoCircleFilled,
  IconMapPinFilled,
  IconCalendarEvent,
} from "@tabler/icons-react";

const BookModal = ({
  carType,
  pickUp,
  dropOff,
  pickTime,
  dropTime,
  image,
  closeModal,
  OnSuccess,
}) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    OnSuccess();
  };

  return (
    <div className="booking-modal">
      <div className="booking-modal__title">
        <h2>Complete Reservation</h2>
        <IconX width={24} height={24} onClick={closeModal} />
      </div>
      <div className="booking-modal__message">
        <h3>
          <IconInfoCircleFilled />
          <span>
            Upon completing this reservation enquiry, you will receive:
          </span>
        </h3>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      <div className="booking-modal__car-info">
        <div className="booking-modal__car-info__details">
          <h4>Location & Date</h4>
          <div className="booking-modal__car-info__details__section">
            <IconCalendarEvent width={24} height={24} />
            <div>
              <h5>Pick-Up Date & Time</h5>
              <p>
                {pickTime} /
                <input type="time" />
              </p>
            </div>
          </div>
          <div className="booking-modal__car-info__details__section">
            <IconCalendarEvent />
            <div>
              <h5>Drop-Off Date & Time</h5>
              <p>
                {dropTime} /
                <input type="time" />
              </p>
            </div>
          </div>
          <div className="booking-modal__car-info__details__section">
            <IconMapPinFilled />
            <div>
              <h5>Pick-Up Location</h5>
              <p>{pickUp}</p>
            </div>
          </div>
          <div className="booking-modal__car-info__details__section">
            <IconMapPinFilled />
            <div>
              <h5>Drop-Off Location</h5>
              <p>{dropOff}</p>
            </div>
          </div>
        </div>
        <div className="booking-modal__car-info__model">
          <h4>
            Car - <span>{carType}</span>
          </h4>
          <img src={image} alt={carType} />
        </div>
      </div>
      <div className="booking-modal__personal-info">
        <h4>Personal Information</h4>
        <form
          onSubmit={handleSubmit}
          className="booking-modal__personal-info__form"
        >
          <div className="booking-modal__personal-info__form__2col">
            <div>
              <label htmlFor="firstName">
                First Name
                <span>*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={personalInfo.firstName}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name
                <span>*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={personalInfo.lastName}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
            <div>
              <label htmlFor="phone">
                Phone Number
                <span>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={personalInfo.phone}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
            <div>
              <label htmlFor="age">
                Age
                <span>*</span>
              </label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="18"
                value={personalInfo.age}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
          </div>
          <div className="booking-modal__personal-info__form__1col">
            <div>
              <label htmlFor="email">
                Email
                <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email addess"
                value={personalInfo.email}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
          </div>
          <div className="booking-modal__personal-info__form__1col">
            <div>
              <label htmlFor="address">
                Address
                <span>*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter your street address"
                value={personalInfo.address}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
          </div>
          <div className="booking-modal__personal-info__form__2col">
            <div>
              <label htmlFor="city">
                City
                <span>*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city"
                value={personalInfo.city}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
            <div>
              <label htmlFor="zipCode">
                Zip Code
                <span>*</span>
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="Enter your zip code"
                value={personalInfo.zipCode}
                onChange={handleChange}
              />
              <p>This field is required.</p>
            </div>
          </div>

          <button>Reserve Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
