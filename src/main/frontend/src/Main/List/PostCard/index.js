import React, { useState } from "react";
import PropTypes from "prop-types";
import API from "../../../Api";
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

const PostCard = ({ post, handleUpVote }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => setExpanded(!expanded);

    const vote = async () => {
        try {
            await API.put(`/post/${post.id}`);
            handleUpVote(post.id);
        } catch (error) {
            console.log(error.message);
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
