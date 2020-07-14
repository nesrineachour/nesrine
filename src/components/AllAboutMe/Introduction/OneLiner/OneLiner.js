import React from "react";
import styles from "./OneLiner.module.css";
import Resume from "../../Resume/Resume";
import SocialMedia from "../../SocialMedia/SocialMedia";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink as NavLink } from "react-router-hash-link";

const oneLiner = () => {
  return (
    <span className={styles.Whole}>
      <div className={styles.OneLiner}>
        <h3 className={styles.first}>Artist.&nbsp;</h3>
        <a href="https://sulaimanh.github.io/cv/" className={styles.Wife}>
          <h3 className={styles.second}>Wife.&nbsp;</h3>
        </a>
        <h3 className={styles.third}>Traveler.</h3>
      </div>
      {/* <Resume /> */}
      <div className={styles.OneLiner}>{/* <SocialMedia /> */}</div>
      <NavLink smooth to={{ pathname: "/nesrine/", hash: "#Welcome" }}>
        <FontAwesomeIcon
          className={styles.Arrow}
          icon={faArrowAltCircleDown}
          size="2x"
          color="#eab0d9"
        />
      </NavLink>
    </span>
  );
};

export default oneLiner;
