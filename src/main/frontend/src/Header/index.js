import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import logo from "./logo.svg";

const useStyles = makeStyles(theme => ({
  header: {
    height: theme.spacing(10),
    backgroundColor: "#282c34",
    display: "flex",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,

    "& div": {
      width: 800,
      margin: "0 auto",
      display: "flex",
      alignItems: "center"
    }
  },
  "@keyframes appLogoSpin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  headerLogo: {
    animation: "$appLogoSpin infinite 20s linear",
    pointerEvents: "none",
    objectFit: "cover"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div>
        <img src={logo} className={classes.headerLogo} alt="logo" height="50" />
        <Typography variant="button" gutterBottom>
          React Text Posts
        </Typography>
      </div>
    </header>
  );
};

export default Header;
