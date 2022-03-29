import React from "react";
import styles from "./Footer.module.css";
import SocialLink from "components/SocialLink/SocialLink";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import DocumentIcon from "Myicons/DocumentIcon";

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
            <SocialLink
              link="https://twitter.com/Lucky_BNB"
              target="_blank"
              icon={<FaTwitter size={20} />}
            />
            <SocialLink
              link="https://luckyworldjackpot.gitbook.io/lucky-world-jackpot/"
              target="_blank"
              icon={<DocumentIcon color={"white"} size={23} />}
            />
            <SocialLink
              link="https://t.me/LuckyBNB_Official"
              target="_blank"
              icon={<FaTelegramPlane size={22} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
