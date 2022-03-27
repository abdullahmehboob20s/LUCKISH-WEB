import React from "react";
import styles from "./GradientButton.module.css";

function GradientButton({
  title,
  style,
  type = "button",
  fontSize = "fs-14px",
}) {
  return (
    <button
      className={`${styles.btn} ${fontSize} weight-5 pointer white`}
      style={style}
      type={type}
    >
      {title}
    </button>
  );
}

export default GradientButton;
