import React, { useState } from "react";
import Logo from "../images/logo/logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpennav] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/">
              <img src={Logo} alt="car rental logo" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="models">Vehicle Models</NavLink>
            </li>
            <li>
              <NavLink to="testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="our-team">Our Team</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
          <div className="navbar__buttons">
            <button className="navbar__buttons__sign-in">Sign In</button>
            <button className="navbar__buttons__register">Register</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
