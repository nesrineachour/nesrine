import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

const navigationItems = props => {
  const navigationItems = ["Welcome", "About Me", "Contact Me"];
  let nav = navigationItems.map(item => {
    return (
      <NavLink
        smooth
        activeClassName={styles.NavigationItem}
        key={item}
        to={{ pathname: "/nesrine/", hash: "#" + item }}
        onClick={props.clicked}
      >
        <NavigationItem>{item}</NavigationItem>
      </NavLink>
    );
  });
  return (
    <ul className={styles.NavigationItems}>
      {nav}

      {/* <NavigationItem>About Me</NavigationItem>
      <NavigationItem>Education</NavigationItem>
      <NavigationItem>Skills</NavigationItem>
      <NavigationItem>Work Experience</NavigationItem>
      <NavigationItem>Get In Touch</NavigationItem> */}
    </ul>
  );
};

export default navigationItems;
