import React from "react";
import Hero from "../../components/Hero/Hero";
import LatestBlog from "../../components/LatestBlog/LatestBlog";
import Team from "../../components/Team/Team";
import { Helmet } from "react-helmet";
import Bizpro from "../../components/Bizpro/Bizpro";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>

      <Hero />
      <Bizpro/>
      <Team />
      <LatestBlog />
    </>
  );
};

export default Home;
