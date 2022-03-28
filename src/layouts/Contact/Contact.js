import React from "react";
import styles from "./Contact.module.css";
import coinMachine from "assets/images/coinMachine.png";

function Contact() {
  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.left}>
          <div className="mb-50px">
            <h1 className="fs-44px white weight-7 mb-4">Contact</h1>
            <p className="fs-16px text-gray weight-4">
              Have a question? Reach out to us and we’ll get back to you
              shortly.
            </p>
          </div>

          <form>
            <div className={`${styles.form_feilds} mb-30px`}>
              <input
                className="fs-16px white weight-5"
                type="text"
                placeholder="First Name"
              />
              <input
                className="fs-16px white weight-5"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="fs-16px white weight-5"
                type="email"
                placeholder="Email"
              />
              <input
                className="fs-16px white weight-5"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="fs-16px white weight-5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`${styles.submit_btn} fs-18px weight-4 white pointer`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <div
            className={`${styles.coinMachine_wrapper} relative w-fit-content`}
          >
            <div className={styles.coinMachine_title}>
              <span className="white weight-7">8</span>
              <span className="white weight-7">8</span>
              <span className="white weight-7">8</span>
            </div>
            <img src={coinMachine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
