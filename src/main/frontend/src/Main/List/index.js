import React, { useState, useEffect } from "react";
import API from "../../Api";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { Fab, Typography } from "@material-ui/core";
import { Add, Reorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    margin: theme.spacing(2),
    position: "fixed",
    bottom: 0,
    right: 0
  }
}));

const List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const classes = useStyles();

  const getPosts = async () => {
    try {
      const response = await API.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {posts.length &&
        posts.map(post => <PostCard key={post.id} {...{ post }} />)}
      {!posts.length && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Reorder style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "7em" }} />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontSize: "1.6em" }}
          >
            Ainda não existem posts
          </Typography>
        </div>
      )}
      <div className={classes.footer}>
        <Link to="/add">
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <Add />
          </Fab>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default List;
