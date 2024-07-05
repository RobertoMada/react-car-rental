import React from "react";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <HomeBanner />
    </>
  );
};

export default Home;
