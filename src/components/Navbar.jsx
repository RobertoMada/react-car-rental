import React, { useState } from "react";
import Logo from "../images/logo/logo.png";
import { NavLink, Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [openNav, setOpennav] = useState(false);

  return (
    <>
      <nav>
        {/* Desktop navigation */}
        <div className="container">
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
            <div className="mobile-hamburger">
              <IconMenu2
                width={30}
                height={30}
                onClick={() => setOpennav(true)}
              />
            </div>
          </div>
        </div>
        {/* Mobile navigation */}
        <div className={`mobile__navbar ${openNav ? "open" : ""}`}>
          <div className="mobile__navbar__close">
            <IconX width={30} height={30} onClick={() => setOpennav(false)} />
          </div>
          <ul className="mobile__navbar__links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="models">Models</NavLink>
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
