import React from "react";
import styles from "./MoreBio.module.css";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const moreBio = () => {
  return (
    <div className={styles.MoreBio}>
      <div className={styles.Heading}>
        <h4>
          <u>More About Me!</u>
        </h4>
      </div>
      <div className={styles.Desc}>
        <p>I am a fun and calm girl from Algeria.</p>
        <p>
          Some of my favorite things to do are{" "}
          <span className={styles.Word} style={{ color: "#5b8c85" }}>
            drawing
          </span>
          ,{" "}
          <span className={styles.Word} style={{ color: "#00a8cc" }}>
            learning new languages
          </span>{" "}
          , and spending time with{" "}
          <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "#d45079" }}
          >
            family and friends.
            <span className={styles.tooltiptext}>
              <FontAwesomeIcon icon={faHeart} size="1x" color="red" />
            </span>
          </span>
        </p>
        {/* <p>
          My{" "}
          <span className={styles.Word} style={{ color: "#d45079" }}>
            wife
          </span>{" "}
          is a digital and UI/UX designer. Her website is currently under
          construction, but could be found here when ready.
        </p>
        <a>
          <button disabled>
            <FontAwesomeIcon icon={faGlobe} size="1x" color="white" />
            Her Wesbite
          </button>
        </a> */}
        {/* <p>
          In my free time, I love to{" "}
          <span className={styles.Word} style={{ color: "#4d089a" }}>
            workout
          </span>
          , learn{" "}
          <span className={styles.Word} style={{ color: "#db3056" }}>
            new languages
          </span>
          , and{" "}
          <span className={styles.Word} style={{ color: "#5b8c5a" }}>
            design.
          </span>
        </p> */}

        <p>
          I have been working on my{" "}
          <span className={styles.Word} style={{ color: "#4d089a" }}>
            digital and UI/UX design
          </span>{" "}
          skills for the past year. My{" "}
          <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "red" }}
          >
            husband
            <span className={styles.tooltiptext}>
              <FontAwesomeIcon icon={faHeart} size="1x" color="red" />
            </span>
          </span>{" "}
          is a developer and we work together on projects. I design his websites
          before he starts to develop them. This helps him develop faster with
          better looking UI. I love to use my artistic abilities and technology
          to{" "}
          <span className={styles.Word} style={{ color: "#f8615a" }}>
            create amazing things.
          </span>
          {/* <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "#50bda1" }}
          >
            Computer Science.
            <span className={styles.tooltiptext}>
              <FontAwesomeIcon icon={faLaptopCode} size="1x" color="white" />
            </span>
          </span>{" "} */}
          {/* <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "#ff7315" }}
          >
            weekly online sessions
            <span className={styles.tooltiptext}>
              <FontAwesomeIcon icon={faSchool} size="1x" color="white" />
            </span>
          </span>{" "}
          where they can ask questions and work on programming questions
          together. Please{" "}
          <span
            className={[styles.Word, styles.tooltip].join(" ")}
            style={{ color: "red" }}
          >
            contact me
            <span className={styles.tooltiptext}>(954) 329-4092</span>
          </span>{" "}
          if you would like to join. */}
        </p>
        <p>
          After I complete my studies, I will be working as a digital and UI/UX
          designer.
        </p>
      </div>
    </div>
  );
};

export default moreBio;
