import Hero from "layouts/Hero/Hero";
import Introducing from "layouts/Introducing/Introducing";
import Navbar from "layouts/Navbar/Navbar";
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
      <div className="mb-100px">
        <UntilNextDraw />
      </div>
    </div>
  );
}

export default HomePage;
