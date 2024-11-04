import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>My To Do App</h2>
      <div style={styles.navList}>
        <a href="#home" style={styles.navItem}>
          Home
        </a>
        <a href="#todos" style={styles.navItem}>
          Todos
        </a>
        <a href="#user" style={styles.navItem}>
          User Info
        </a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
    backgroundColor: "#2372c8",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
  },
  title: {
    margin: 0,
  },
  navList: {
    display: "flex",
    gap: "15px",
    margin: 0,
    width: "28%",
  },
  navItem: {
    fontSize: "16px",
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
