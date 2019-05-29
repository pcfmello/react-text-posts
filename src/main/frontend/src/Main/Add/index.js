import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";

import Form from "./FormAdd";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(1)
  },
  cardActions: {
    padding: theme.spacing(2),
    paddingTop: 0
  }
}));

const Add = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
          align="center"
          variant="h6"
        >
          O que você gostaria postar?
        </Typography>
        <Form />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          type="submit"
          form="PostForm"
          variant="contained"
          color="primary"
          className={classes.button}
          fullWidth
          size="large"
        >
          OK
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          fullWidth
          component={Link}
          to="/"
          size="large"
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Add;
