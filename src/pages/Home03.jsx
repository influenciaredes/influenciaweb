import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import heroSliderData from "../assets/fake-data/data-slider-3";
import Create from "../components/layouts/home-2/Create";
import TopSeller from "../components/layouts/home-3/TopSeller";
import Slider from "../components/slider/Slider";
import Carousel from "../components/carousel/Carousel";
import SocialMediaImpact from "../components/socialMediaImpact/SocialMediaImpact";
import AboutUs from "../components/aboutUs/AboutUs";
import topSellerData from "../assets/fake-data/data-top-seller";

const Home03 = () => {
  return (
    <div className="home-3">
      <Header />
      <Slider data={heroSliderData} />
      <Carousel />
      <AboutUs />
      <Create />
      <SocialMediaImpact />
      <TopSeller data={topSellerData} />
      <Footer />
    </div>
  );
};

export default Home03;
