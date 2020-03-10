import React from "react";
import styles from "./MoreAboutMe.module.css";
import ProfilePic from "../../../images/Me.jpeg";
import MoreBio from "./MoreBio/MoreBio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const moreAboutMe = props => {
  return (
    <div id="About Me" className={styles.MoreAboutMe}>
      <div className={styles.Image}>
        <span className={styles.Helper}></span>

        <div className={styles.Husband}>
          <p>That's my husband</p>

          <FontAwesomeIcon icon={faArrowDown} size="1x" color="#fd7792" />
        </div>
        <img className={styles.Img} src={ProfilePic} />
      </div>
      <div className={styles.About}>
        <MoreBio />
      </div>
    </div>
  );
};

export default moreAboutMe;
