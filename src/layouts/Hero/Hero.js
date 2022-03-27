import React from "react";
import styles from "./Hero.module.css";
import luckyBnbHeroBanner from "assets/images/luckyBnbHeroBanner.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className="container-wrapper">
          <div className={styles.luckyBnbHeroBanner_parent}>
            <img
              src={luckyBnbHeroBanner}
              className={styles.luckyBnbHeroBanner}
              alt=""
            />

            <div className={styles.luckyBnbHeroBanner_content}>
              <span className="weight-7">8</span>
              <span className="weight-7">8</span>
              <span className="weight-7">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
