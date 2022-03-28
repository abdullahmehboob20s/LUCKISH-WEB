import React from "react";
import styles from "./UntilNextDraw.module.css";
import sparkel from "assets/images/sparkel.png";
import useMediaQuery from "hooks/useMediaQuery";
import TimerBox from "components/TimerBox/TimerBox";
import Stats from "components/Stats/Stats";

function UntilNextDraw() {
  const isBellow860px = useMediaQuery("(max-width : 860px)");

  return (
    <div className="container-wrapper">
      <div className="mb-180px">
        <h1
          className={`text-center ${
            isBellow860px ? "fs-24px" : "fs-32px"
          }  white weight-7 mb-20px`}
        >
          Until Next Draw
        </h1>
        <div className={`${styles.content} relative `}>
          <img src={sparkel} className={styles.sparkel1} alt="" />
          <img src={sparkel} className={styles.sparkel2} alt="" />
          <h1 className="fs-24px white weight-7 text-center mb-20px">
            Buy now!
          </h1>

          <div className={styles.timer}>
            <TimerBox title="Days" count="00" />
            <TimerBox title={`${isBellow860px ? "Hrs" : "Hours"}`} count="06" />
            <TimerBox
              title={`${isBellow860px ? "Min" : "Minutes"}`}
              count="00"
            />
            <TimerBox
              title={`${isBellow860px ? "Sec" : "Seconds"}`}
              count="00"
            />
          </div>
        </div>
      </div>

      <div className={styles.statsWrapper}>
        <Stats
          duration="Weekly"
          type="MegaBNB Draw"
          timer={{ days: "06", hours: "23", minutes: "59", seconds: "59" }}
          currentPrizePool="15.2471 BNB"
          cardsBackgroundColor="#911c1c"
        />
        <Stats
          duration="Monthly"
          type="PowerBNB Draw"
          timer={{ days: "29", hours: "23", minutes: "59", seconds: "59" }}
          currentPrizePool="32.0154 BNB"
          cardsBackgroundColor="#202020"
        />
      </div>
    </div>
  );
}

export default UntilNextDraw;
