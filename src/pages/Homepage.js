import React from "react";
import Reviews from "../components/Homepage/Reviews";
import Carousel from "../components/Homepage/Carousel";
import Banner from "../components/Homepage/Banner";
import LatestPosts from "../components/Homepage/LatestPosts";
import CallToAction from "../components/Homepage/CallToAction";
import BasicStatistics from "../components/Homepage/BasicStatistics";
import SplitWithImage from "../components/Homepage/SplitWithImage";
import GridListWithHeading from "../components/Homepage/GridListWithHeading";

function Homepage() {
  return (
    <>
      <Banner />
      <LatestPosts />
      <CallToAction
        ctaText="Nuk keni llogari?"
        btnText="Regjistrohu"
        contentPosition="left"
        path="regjistrohu"
      />
      <SplitWithImage />

      <BasicStatistics />

      <Reviews />

      <GridListWithHeading />

      <CallToAction
        ctaText="Jeni duke kerkuar residence?"
        btnText="Kërko"
        contentPosition="right"
        path="residences"
      />
      <Carousel />
    </>
  );
}

export default Homepage;
