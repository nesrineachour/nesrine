import React from "react";
import MyResume from "./Sulaiman Hamouda Resume.pdf";
import styles from "./Resume.module.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const resume = () => {
  return (
    <form method="get" action={MyResume}>
      <button className={styles.Resume} type="submit">
        Download Resume <FontAwesomeIcon icon={faDownload} />
      </button>
    </form>
  );
};

export default resume;
