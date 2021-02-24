import React from "react";
import MainPage from "./mainPage";
import PriceTicker from "./priceTicker";
import Slider from "./slider";

const Home = () => {
  return (
    <>
      <Slider />
      <PriceTicker />
      <MainPage />
    </>
  );
};

export default Home;
