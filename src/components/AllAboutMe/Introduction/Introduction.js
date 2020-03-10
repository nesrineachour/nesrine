import React from "react";
import styles from "./Introduction.module.css";
import TypeWriter from "../../TypeWriter/TypeWriter";
import OneLiner from "./OneLiner/OneLiner";

const introduction = props => {
  return (
    <div className={styles.Background}>
      <TypeWriter />
      <OneLiner />
    </div>
  );
};

export default introduction;
