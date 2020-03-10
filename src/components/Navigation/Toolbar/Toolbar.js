import React, { Component } from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import styles from "./Toolbar.module.css";

class Toolbar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    let style = {
      backgroundColor: this.state.isTop ? "" : "rgba(0, 0, 0, 0.5)"
    };

    return (
      <header style={style} className={styles.Toolbar}>
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className={styles.Logo}>
          <Logo name="Nesrine Achour" />
        </div>
      </header>
    );
  }
}

// const toolbar = props => {
//   return (
//     <header className={styles.Toolbar}>
//       <DrawerToggle clicked={props.drawerToggleClicked} />
//       <div className={styles.Logo}>
//         <Logo name="Sulaiman Hamouda" />
//       </div>
//     </header>
//   );
// };

export default Toolbar;
