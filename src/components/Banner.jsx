import React from "react";
import { IconPhone } from "@tabler/icons-react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__overlay"></div>
      <div className="container">
        <div className="text-context">
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <IconPhone width={40} height={40} />
            <h2>(123) 456-7689</h2>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
