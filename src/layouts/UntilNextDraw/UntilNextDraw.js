import React from "react";
import styles from "./UntilNextDraw.module.css";
import sparkel from "assets/images/sparkel.png";

const TimerBox = ({ title, count }) => {
  return (
    <div className={styles.timerBox}>
      <div
        className={`${styles.countBox} gradient-border-image mb-15px fs-32px yellow weight-7`}
      >
        {count}
      </div>
      <p className="fs-18px weight-4 white">{title}</p>
    </div>
  );
};

function UntilNextDraw() {
  return (
    <div className="container-wrapper">
      <div className={`${styles.content} relative`}>
        <img src={sparkel} className={styles.sparkel1} alt="" />
        <img src={sparkel} className={styles.sparkel2} alt="" />
        <h1 className="fs-24px white weight-7 text-center mb-20px">Buy now!</h1>

        <div className={styles.timer}>
          <TimerBox title="Days" count="00" />
          <TimerBox title="Hours" count="06" />
          <TimerBox title="Minutes" count="00" />
          <TimerBox title="Seconds" count="00" />
        </div>
      </div>
    </div>
  );
}

export default UntilNextDraw;
