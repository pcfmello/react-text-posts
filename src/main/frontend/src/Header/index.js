import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Hidden } from "@material-ui/core";
import AddLink from "../common/AddLink";
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

    "& .elements": {
      width: 800,
      minWidth: 320,
      margin: "0 auto",
      paddingRight: 8,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "& .title": {
        display: "flex",
        alignItems: "center",

        "& .logo": {
          animation: "$appLogoSpin infinite 20s linear",
          pointerEvents: "none",
          objectFit: "cover"
        }
      }
    }
  },
  "@keyframes appLogoSpin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className="elements">
        <div className="title">
          <img src={logo} className="logo" alt="logo" height="50" />
          React Text Posts
        </div>
        <Hidden xsDown>
          <AddLink>
            <Button
              className="add"
              variant="contained"
              aria-label="Add"
              disableFocusRipple
            >
              Novo Post
            </Button>
          </AddLink>
        </Hidden>
      </div>
    </header>
  );
};

export default Header;
