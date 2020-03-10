import React, { useState } from "react";
import styles from "./Bio.module.css";
import useWindowSize from "react-use/lib/useWindowSize";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Confetti from "react-confetti";

const Bio = () => {
  const [conf, setConf] = useState(false);

  const { width, height } = useWindowSize();

  const surpriseButton = () => {
    setConf(true);
    setTimeout(() => {
      setConf(false);
    }, 10000);
  };

  const config = { x: 0, y: 1100, w: width / 2, h: 0 };
  return (
    <div className={styles.Bio}>
      <div className={styles.Heading}>
        <h4>
          <u>Hello There!</u>
        </h4>
      </div>
      <div className={styles.Desc}>
        <p>
          My name is{" "}
          <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "#f0134d" }}
          >
            Nesrine
            <span className={styles.tooltiptext}>
              <FontAwesomeIcon icon={faChessQueen} size="1x" color="white" />
            </span>
          </span>{" "}
          and welcome to my page.
        </p>
        <br />
        <br />
        <p>
          I love to learn new languages, sing, and design. I am fluent in{" "}
          <span className={styles.Word} style={{ color: "#21bf73" }}>
            Arabic
          </span>
          ,{" "}
          <span className={styles.Word} style={{ color: "#ad62aa" }}>
            French
          </span>
          , and{" "}
          <span className={styles.Word} style={{ color: "#ed6663" }}>
            English
          </span>
          . Hoping to learn Spanish next!
        </p>
        <p>
          I graduated with a degree in Finance, however, my passion is Art.
          During my free time, I love to draw and learn new things, such as{" "}
          <span className={styles.Word} style={{ color: "#8cba51" }}>
            digital design!
          </span>{" "}
        </p>
        <br />
        <br />
        <p>
          I am currently working on my skills in order to become a{" "}
          <span className={styles.Word} style={{ color: "#fe9801" }}>
            digital and UI/UX designer
          </span>
        </p>
        <br />
        <br />
        <button onClick={surpriseButton}>Surprise!</button>
        {conf === true ? (
          <Confetti
            className={styles.conf}
            confettiSource={config}
            numberOfPieces="500"
            width={width}
            height={height + 1000}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Bio;
