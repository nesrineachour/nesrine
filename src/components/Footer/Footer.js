import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <p>Nesrine Achour ⓒ {year}</p>
    </footer>
  );
};

export default footer;
