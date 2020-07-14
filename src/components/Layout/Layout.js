import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink as NavLink } from "react-router-hash-link";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    showBottomTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      console.log("SCROLLED");
      const showBottomTop = window.scrollY < 300;
      if (showBottomTop !== this.state.showBottomTop) {
        this.setState({ showBottomTop });
      }
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    let bottomTop = this.state.showBottomTop ? null : (
      <NavLink smooth to={{ pathname: "/nesrine/", hash: "#Top" }}>
        <div className={styles.ToTop}>
          <FontAwesomeIcon icon={faAngleUp} size="2x" color="white" />
        </div>
      </NavLink>
    );
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          sideDrawerClosedHandler={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
        {bottomTop}
      </React.Fragment>
    );
  }
}

export default Layout;
