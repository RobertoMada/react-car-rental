import React from "react";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import HomeBanner from "../components/HomeBanner";
import ChooseUs from "../components/ChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <HomeBanner />
      <ChooseUs />
    </>
  );
};

export default Home;
