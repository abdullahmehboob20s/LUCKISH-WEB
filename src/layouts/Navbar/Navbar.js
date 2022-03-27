import React from "react";
import logo from "assets/images/logo.png";
import styles from "./Navbar.module.css";
import SocialLink from "components/SocialLink/SocialLink";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Button from "components/Button/Button";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div>
            <img src={logo} className={styles.logo} alt="" />
          </div>

          <div className={styles.navLinks}>
            <a href="#" className="fs-16px white weight-4">
              Home
            </a>
            <a href="#" className="fs-16px white weight-4">
              Token
            </a>
            <a href="#" className="fs-16px white weight-4">
              Roadmap
            </a>
            <a href="#" className="fs-16px white weight-4">
              Contact
            </a>
          </div>

          <div className={styles.navSocialLinks}>
            <SocialLink icon={<FaTwitter size={20} />} />
            <SocialLink icon={<FaDiscord size={23} />} />
            <SocialLink icon={<FaTelegramPlane size={22} />} />

            <Button title="Connect" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
