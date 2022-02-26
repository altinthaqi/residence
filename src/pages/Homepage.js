import React from "react";
import Reviews from "../components/Homepage/Reviews";
import Carousel from "../components/Homepage/Carousel";
import Banner from "../components/Homepage/Banner";
import LatestPosts from "../components/Homepage/LatestPosts";
import CallToAction from "../components/Homepage/CallToAction";

function Homepage() {
  return (
    <>
      <Banner />
      <LatestPosts />
      <CallToAction
        ctaText="Nuk keni llogari?"
        btnText="Regjistrohu"
        contentPosition="left"
      />
      <Reviews />
      <CallToAction
        ctaText="Jeni duke kerkuar residence?"
        btnText="Kerko"
        contentPosition="right"
      />
      <Carousel />
    </>
  );
}

export default Homepage;
