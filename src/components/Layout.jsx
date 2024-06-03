import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Banner />
      <Footer />
    </div>
  );
};

export default Layout;
