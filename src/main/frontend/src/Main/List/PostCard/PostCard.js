import React from "react";
import PropTypes from "prop-types";
import API from "../../../Api";
import moment from "moment";
import "moment/locale/pt-br";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Favorite } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(1),

    "& .avatar": {
      backgroundColor: grey[600]
    }
  }
}));

const PostCard = ({ post, handleUpVote }) => {
  const classes = useStyles();

  const vote = async () => {
    try {
      await API.put(`/post/${post.id}`);
      handleUpVote(post.id);
    } catch (error) {
      alert("Erro ao aplicar voto ao post! Tente novamente mais tarde.");
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            {post.owner.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        title={post.owner}
        subheader={moment(post.postDate).format("LL")}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Up vote" onClick={vote}>
          <Favorite />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.upVotes} up votes
        </Typography>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  handleUpVote: PropTypes.func.isRequired
};

export default PostCard;
