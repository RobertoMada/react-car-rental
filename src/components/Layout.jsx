import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = () => {
  let { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <Outlet />
      {pathname !== "/" ? <Banner /> : null}
      <Footer />
    </>
  );
};

export default Layout;
