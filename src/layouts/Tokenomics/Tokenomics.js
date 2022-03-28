import React from "react";
import styles from "./Tokenomics.module.css";

const Card = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <h2 className="mb-10px text-center fs-20px white weight-7">{title}</h2>
      <p className="text-center fs-16px white weight-7 text-gray">{desc}</p>
    </div>
  );
};

function Tokenomics() {
  return (
    <div className="container-wrapper">
      <h1 className="text-center fs-44px white weight-7 mb-50px">Tokenomics</h1>

      <div className={styles.cards_grid}>
        <Card title="1,000,000,000,000" desc="Tokens " />
        <Card title="2.4%" desc="Marketing & Charity" />
        <Card title="2%" desc="$LBNB Reflections to all holders" />
        <Card title="2.4%" desc="$LBNB Jackpot" />
        <Card title="3.2%" desc="Liquidity Add" />
        <Card title="6 Hours" desc="Winner Drawn Every" />
        <Card title="1 : 292,201,338" desc="Odds of winning Powerball " />
        <Card title="1 : 250" desc="Average Odds of winning LuckyBNB" />
        <Card title="1 : 302,575,350" desc="Odds of winning Mega Millions " />
      </div>
    </div>
  );
}

export default Tokenomics;
