//  scrollToTop = () => window.scrollTo(0, 0);

import React from "react";
import { useTranslation } from "react-i18next";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import TitleHemlet from "../components/TitleHemlet/TitleHemlet";
import HomeSecFive from "../layouts/HomePage/HomeSecFive/HomeSecFive";
import HomeSecFour from "../layouts/HomePage/HomeSecFour/HomeSecFour";
import HomeSecThree from "../layouts/HomePage/HomeSecThree/HomeSecThree";

import "./HomePage.scss";



function HomePage() {

  return (
    <div className="home-page" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>
      <TitleHemlet title="Shoppers" />
      <HomeHeader />
      <HomeSecThree />
      <HomeSecFour />
      <HomeSecFive />
    </div>
  );
}

export default HomePage;
