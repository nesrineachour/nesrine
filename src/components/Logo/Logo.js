import React from "react";
import styles from "./Logo.module.css";
import LogoPicture from "../../images/Logo/rose.png";
// import Typing from "react-typing-animation";

const logo = props => {
  //   /* <Typing> */
  // <h4>{props.name}</h4>;
  //   /* </Typing> */
  return (
    <div className={styles.Logo}>
      <div className={styles.DesktopOnly}>
        {props.name ? <h4>{props.name}</h4> : ""}
      </div>
      <img className={styles.Rose} src={LogoPicture} alt="MyLogo" />
    </div>
  );
};

export default logo;
