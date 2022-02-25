import React from "react";
import Reviews from "../components/homepage/Reviews";
import Carousel from "../components/homepage/Carousel";
import Banner from "../components/homepage/Banner";
import LatestPosts from "../components/homepage/LatestPosts";
import CallToAction from "../components/homepage/CallToAction";

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
