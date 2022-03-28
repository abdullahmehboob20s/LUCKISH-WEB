import React, { useEffect, useRef, useState } from "react";
import styles from "./FortuneMap.module.css";
import roadmapCardImg1 from "assets/images/roadmap-card-images/1.png";
import roadmapCardImg2 from "assets/images/roadmap-card-images/2.png";
import roadmapCardImg3 from "assets/images/roadmap-card-images/3.png";
import roadmapCardImg4 from "assets/images/roadmap-card-images/4.png";

import cardProps_1 from "assets/images/cardProps_1.png";
import cardProps_2 from "assets/images/star_glow.png";
import cardProps_3 from "assets/images/cardProps_3.png";
import FortuneMapSection from "components/FortuneMapSection/FortuneMapSection";

function FortuneMap() {
  const roadmap = useRef(null);
  const roadmapLine = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handler = () => {
      let a = window.scrollY - roadmap.current.offsetTop;
      let value = a + window.innerHeight / 2;
      setValue(value);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <div className="container-wrapper">
      <h1 className="text-center fs-44px white weight-7 mb-70px">
        Fortune Map
      </h1>

      <div className={styles.roadmap_cards} ref={roadmap}>
        <div className={styles.roadmapLineWrapper}>
          <div
            className={styles.innerLine}
            style={{ height: value + "px" }}
            ref={roadmapLine}
          ></div>
        </div>
        <FortuneMapSection
          title="Phase 1"
          img={roadmapCardImg1}
          cardPropImg={cardProps_1}
          borderColor="#E8B235"
          cardPropsStyles={{ top: "-16%", left: "-12%" }}
          points={[
            "Stealth Launch",
            "Coinmarketcap Listing",
            "Coingecko Listing",
            "Commemorative NFT for the 1st Jackpot Winner",
            "Social Channels Launched",
            "1000 Holders",
            "Community Driven Charity Donation",
          ]}
        />
        <FortuneMapSection
          title="Phase 2"
          img={roadmapCardImg2}
          cardPropImg={cardProps_2}
          borderColor="#8D0C0B"
          cardPropsStyles={{ top: "-23%", right: "-14%" }}
          reverse={true}
          points={[
            "Website Updates",
            "Lil’ Luck NFTs",
            "Special Promotional Jackpots",
            "Commemorative NFT for the 100th Jackpot Winner",
            "Major Sponsorship",
            "5000 Holders",
            "Community Driven Charity Donation",
          ]}
        />
        <FortuneMapSection
          title="Phase 3"
          img={roadmapCardImg3}
          cardPropImg={cardProps_3}
          borderColor="#8D0C0B"
          cardPropsStyles={{ top: "-16%", left: "-10%" }}
          points={[
            "LuckyBNB Whitepaper",
            "Shilling Contests",
            "Commemorative NFT for the 200th Jackpot Winner",
            "Mainstream Advertising",
            "XBOX X + PS5 Prize Package",
            "10,000 Holders",
            "Community Driven Charity Donation",
          ]}
        />
        <FortuneMapSection
          title="Phase 4"
          img={roadmapCardImg4}
          cardPropImg={cardProps_1}
          borderColor="#E8B235"
          cardPropsStyles={{ top: "-16%", right: "-8%" }}
          reverse={true}
          points={[
            "Roadmap Updates",
            "Lil’ Luck Plushies",
            "Commemorative NFT for the 500th Jackpot Winner",
            "Metaverse Casino NFT World",
            "Construction Begins",
            "50,000 Holders",
            "Major Community Driven Charity Donation",
            "Much more TBA",
          ]}
        />
      </div>
    </div>
  );
}

export default FortuneMap;
