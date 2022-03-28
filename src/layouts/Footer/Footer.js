import React from "react";
import styles from "./Footer.module.css";
import SocialLink from "components/SocialLink/SocialLink";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.left}>
          <p className="fs-18px white weight-4">
            Copyright © 2022 All rights reserved.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.socialLink}>
            <SocialLink icon={<FaTwitter size={20} />} />
            <SocialLink icon={<FaDiscord size={23} />} />
            <SocialLink icon={<FaTelegramPlane size={22} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
