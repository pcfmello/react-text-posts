import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

import Form from "./FormAdd";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(1),

    "& .card-actions": {
      padding: theme.spacing(2),
      paddingTop: 0,
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center"
      },

      "& .button:first-child": {
        [theme.breakpoints.down("xs")]: {
          marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.up("sm")]: {
          marginRight: theme.spacing(1)
        }
      },

      "& .button:last-child": {
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1)
        }
      }
    }
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
      <div className="card-actions">
        <Button
          className="button"
          type="submit"
          form="PostForm"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          OK
        </Button>
        <Button
          className="button"
          variant="contained"
          fullWidth
          component={Link}
          to="/"
          size="large"
        >
          Cancelar
        </Button>
      </div>
    </Card>
  );
};

export default Add;
