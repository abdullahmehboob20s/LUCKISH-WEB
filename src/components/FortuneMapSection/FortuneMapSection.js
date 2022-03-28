import React from "react";
import styles from "./FortuneMapSection.module.css";
import roadmap_card_circle from "assets/images/roadmap_card_circle.png";

const FortuneMapSection = ({
  title,
  points,
  img,
  cardPropImg,
  borderColor,
  cardPropsStyles,
  reverse = false,
}) => {
  return (
    <div className={`${styles.cardSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.card_wrapper}>
        <div
          className={`${styles.card} relative`}
          style={{ borderColor: borderColor }}
        >
          {cardPropImg ? (
            <img
              src={cardPropImg}
              className="absolute"
              style={cardPropsStyles}
              alt=""
            />
          ) : (
            ""
          )}
          <h2 className={`fs-32px white weight-7 mb-10px`}>{title}</h2>

          <ul className={styles.card_points} style={{ paddingLeft: "5.5%" }}>
            {points.map((point, index) => (
              <li key={index} className="fs-16px weight-4 white">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.circle_wrapper}>
        <img src={roadmap_card_circle} className={styles.circle} alt="" />
      </div>

      <div className={styles.img_wrapper}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default FortuneMapSection;
