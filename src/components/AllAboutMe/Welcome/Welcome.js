import React from "react";
import styles from "./Welcome.module.css";
import Bio from "./Bio/Bio";
import Coding from "../../../images/code.jpg";

const welcome = props => {
  return (
    <div id="Welcome" className={styles.Welcome}>
      <div className={styles.About}>
        <Bio />
      </div>
      <div className={styles.Image}>
        <img src={Coding} alt="Coding" />
      </div>
    </div>
  );
};

export default welcome;
