import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/pt-br";

import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { Favorite } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: grey[600]
  },
  postIsVoted: {
    color: red[500]
  },
  postIsNotVoted: {
    color: grey[600]
  }
}));

const PostCard = ({ post }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

  const vote = () => {
    if (!isVoted) {
      // Criar função para incluir voto backend
      setIsVoted(true);
      console.log("up vote");
    } else {
      // Criar função para retirar voto backend
      setIsVoted(false);
      console.log("down vote");
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
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
        <IconButton
          aria-label="Up vote"
          className={isVoted ? classes.postIsVoted : classes.postIsNotVoted}
          onClick={vote}
        >
          <Favorite className={classes.favoriteIcon} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.upVotes} up votes
        </Typography>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
