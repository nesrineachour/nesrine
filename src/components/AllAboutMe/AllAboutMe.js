import React from "react";
import styles from "./AllAboutMe.module.css";
import Introduction from "./Introduction/Introduction";
import Welcome from "./Welcome/Welcome";
import MoreAboutMe from "./MoreAboutMe/MoreAboutMe";
import Skills from "./Skills/Skills";
import Footer from "../Footer/Footer";
import EmailForm from "../../containers/EmailForm/EmailForm";

function AllAboutMe() {
  return (
    <div id="Top" className={styles.AllAboutMe}>
      <Introduction />
      <Welcome />
      <MoreAboutMe />
      {/* <Skills /> */}
      <EmailForm />
      <Footer />
    </div>
  );
}

export default AllAboutMe;
