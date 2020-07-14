import React, { Component } from "react";
import styles from "./EmailForm.module.css";
import Email from "./Email/Email";
import contactMe from "../../images/contactMe.png";

const emailForm = () => {
  return (
    <div id="Contact Me" className={styles.EmailForm}>
      <div className={styles.Heading}>
        <h2>Get In Touch</h2>
        <p>Need a designer? Contact me using the form below!</p>
      </div>
      <div className={styles.Form}>
        <div className={styles.Image}>
          <img src={contactMe} />
        </div>
        <div className={styles.Email}>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default emailForm;
