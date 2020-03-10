import React from "react";
import styles from "./SocialMedia.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialMedia = () => {
  return (
    <div className={styles.SocialMedia}>
      <a href="https://github.com/sulaimanh">
        <FontAwesomeIcon
          className={styles.Social}
          icon={faGithub}
          size="2x"
          color="white"
        />
      </a>
      <a href="https://www.linkedin.com/in/sulaimanhamouda/">
        <FontAwesomeIcon
          className={styles.Social}
          icon={faLinkedin}
          size="2x"
          color="white"
        />
      </a>
    </div>
  );
};

export default socialMedia;
