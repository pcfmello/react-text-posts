import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Hidden } from "@material-ui/core";
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
      margin: "0 auto",
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
      },
      "& .add": {
        marginRight: theme.spacing(1),
        textDecoration: "none"
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
          <Link to="/add" className="add">
            <Button variant="contained" aria-label="Add" disableFocusRipple>
              Novo Post
            </Button>
          </Link>
        </Hidden>
      </div>
    </header>
  );
};

export default Header;
