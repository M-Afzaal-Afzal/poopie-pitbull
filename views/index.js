import React from "react";
import Layout from "../components/Layout";
import Teams from "./Teams";
import FAQ from "./FAQ";
import Footer from "./Footer";
import About from "./About";
import Specs from "./Specs";
import Header from "./Header";
import RoadMap from "./RoadMap";
const Index = () => {
  return (
    <div>
      <Layout>
        <div id="Home">
          <Header />
        </div>
        <div id="Roadmap">
          <RoadMap />
        </div>
        <div id="Teams">
          <Teams />
        </div>
        <div id="Specs">
          <Specs />
        </div>
        <div id="FAQ">
          <FAQ />
        </div>
        <div id="About">
          <About />
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default Index;
