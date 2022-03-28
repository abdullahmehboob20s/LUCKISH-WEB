import React, { useEffect, useState } from "react";
import logo from "assets/images/logo.png";
import styles from "./Navbar.module.css";
import SocialLink from "components/SocialLink/SocialLink";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Button from "components/Button/Button";
import useMediaQuery from "hooks/useMediaQuery";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";

function Navbar() {
  const isBellow860px = useMediaQuery("(max-width : 860px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div>
            <img src={logo} className={styles.logo} alt="" />
          </div>

          <div className={`black-screen ${isOpen ? "show" : ""}`}></div>

          <div
            ref={menuRef}
            className={`${styles.navbar_right} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={`${styles.closeBtn} w-fit-content mb-15px pointer`}
              style={{ marginLeft: "-10px" }}
              onClick={() => setIsOpen(false)}
            >
              <GrFormClose size={34} />
            </button>

            <div className={styles.navLinks}>
              <ScrollLink
                to="home"
                onClick={() => setIsOpen(false)}
                offset={-100}
                className={`fs-16px pointer ${
                  isBellow860px ? "black" : "white"
                }  weight-4`}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="token"
                onClick={() => setIsOpen(false)}
                offset={-150}
                className={`fs-16px pointer ${
                  isBellow860px ? "black" : "white"
                }  weight-4`}
              >
                Token
              </ScrollLink>
              <ScrollLink
                to="roadmap"
                onClick={() => setIsOpen(false)}
                offset={-150}
                className={`fs-16px pointer ${
                  isBellow860px ? "black" : "white"
                }  weight-4`}
              >
                Roadmap
              </ScrollLink>
              <ScrollLink
                to="contact"
                onClick={() => setIsOpen(false)}
                offset={-150}
                className={`fs-16px pointer ${
                  isBellow860px ? "black" : "white"
                }  weight-4`}
              >
                Contact
              </ScrollLink>
            </div>

            <div className={styles.navSocialLinks}>
              <div className={styles.socialIcons}>
                <SocialLink
                  icon={
                    <FaTwitter
                      style={{
                        fill: isBellow860px ? "var(--yellow)" : "white",
                      }}
                      size={20}
                    />
                  }
                />
                <SocialLink
                  icon={
                    <FaDiscord
                      style={{
                        fill: isBellow860px ? "var(--yellow)" : "white",
                      }}
                      size={23}
                    />
                  }
                />
                <SocialLink
                  icon={
                    <FaTelegramPlane
                      style={{
                        fill: isBellow860px ? "var(--yellow)" : "white",
                      }}
                      size={22}
                    />
                  }
                />
              </div>

              <Button title="Connect" />
            </div>
          </div>

          <button
            className={`${styles.hamburger} pointer`}
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
