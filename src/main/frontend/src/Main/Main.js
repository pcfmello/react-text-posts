import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "./List/List";
import Add from "./Add/Add";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 800,
    margin: "auto",
    padding: theme.spacing(1)
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Switch>
        <Route path="/" exact={true} component={List} />
        <Route path="/add" component={Add} />
        <Route path="*" component={List} />
      </Switch>
    </div>
  );
};

export default Main;
