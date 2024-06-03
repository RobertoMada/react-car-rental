import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Banner />
      <Footer />
    </>
  );
};

export default Layout;
