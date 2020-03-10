import React from "react";
import styles from "./NavigationItem.module.css";

const navigationItem = props => {
  return (
    <div className={styles.NavigationItem}>
      <li>{props.children}</li>
    </div>
  );
};

export default navigationItem;
