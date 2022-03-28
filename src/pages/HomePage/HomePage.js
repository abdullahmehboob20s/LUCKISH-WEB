import Coins from "layouts/Coins/Coins";
import Contact from "layouts/Contact/Contact";
import Features from "layouts/Features/Features";
import Footer from "layouts/Footer/Footer";
import FortuneMap from "layouts/FortuneMap/FortuneMap";
import Hero from "layouts/Hero/Hero";
import HowDoesItWork from "layouts/HowDoesItWork/HowDoesItWork";
import Introducing from "layouts/Introducing/Introducing";
import Navbar from "layouts/Navbar/Navbar";
import Tokenomics from "layouts/Tokenomics/Tokenomics";
import UntilNextDraw from "layouts/UntilNextDraw/UntilNextDraw";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Introducing />
      </div>
      <div className="mb-150px">
        <UntilNextDraw />
      </div>
      <div className="mb-100px">
        <HowDoesItWork />
      </div>
      <div className="mb-100px">
        <Tokenomics />
      </div>
      <div className="mb-150px">
        <Features />
      </div>
      <div className="mb-200px">
        <FortuneMap />
      </div>
      <div className="mb-200px">
        <Coins />
      </div>
      <div className="mb-100px">
        <Contact />
      </div>
      <div className="mb-100px">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
