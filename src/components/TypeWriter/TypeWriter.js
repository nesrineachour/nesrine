import React, { Component } from "react";
import Typing from "react-typing-animation";
import styles from "./TypeWriter.module.css";
import LogoPicture from "../../images/Logo/rose.png";

class TypeWriter extends Component {
  render() {
    return (
      <Typing cursorClassName={styles.Cursor} speed={150} loop={true}>
        <h1 className={styles.First}>Nesrine</h1>
        {/* <img className={styles.Rose} src={LogoPicture} alt="MyLogo" /> */}
        <h1 className={styles.Last}> Achour</h1>
        <Typing.Backspace delay={2000} count={20} speed={200} />
      </Typing>
    );
  }
}

export default TypeWriter;
