import React, { useState, useEffect } from "react";
import API from "../../Api";
import PostCard from "./PostCard";
import { Fab, Typography, Hidden } from "@material-ui/core";
import { Add, Reorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AddLink from "../../common/AddLink";

const useStyles = makeStyles(theme => ({
  container: {
    "& .footer": {
      margin: theme.spacing(2),
      position: "fixed",
      bottom: 0,
      right: 0,

      "& .add-icon-button": {
        color: "white",
        backgroundColor: "#282c34"
      }
    },

    "& .empty-list": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      "& .empty-list-icon": {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "7em"
      },

      "& .empty-list-text": {
        fontSize: "1.6em"
      }
    }
  }
}));

const List = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const classes = useStyles();

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await API.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpVote = postId => {
    const newPosts = posts.map(post =>
      post.id === postId ? { ...post, upVotes: post.upVotes + 1 } : post
    );
    setPosts(newPosts);
  };

  return (
    <div className={classes.container}>
      {!isLoading && (
        <div>
          {!!posts.length &&
            posts.map(post => (
              <PostCard key={post.id} {...{ post, handleUpVote }} />
            ))}
          {!posts.length && (
            <div className="empty-list">
              <Reorder className="empty-list-icon" />
              <Typography
                className="empty-list-text"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Ainda não existem posts
              </Typography>
            </div>
          )}
        </div>
      )}
      <Hidden smUp>
        <div className="footer">
          <AddLink>
            <Fab className="add-icon-button" aria-label="Add">
              <Add />
            </Fab>
          </AddLink>
        </div>
      </Hidden>
    </div>
  );
};

export default List;
