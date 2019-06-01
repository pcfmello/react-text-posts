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
    },
    addIconButton: {
        color: "white",
        backgroundColor: "#282c34"
    },
    emptyList: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    emptyListIcon: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "7em"
    },
    emptyListText: {
        fontSize: "1.6em"
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
        <React.Fragment>
            {!isLoading && (
                <div>
                    {!!posts.length &&
                        posts.map(post => (
                            <PostCard
                                key={post.id}
                                {...{ post, handleUpVote }}
                            />
                        ))}
                    {!posts.length && (
                        <div className={classes.emptyList}>
                            <Reorder className={classes.emptyListIcon} />
                            <Typography
                                className={classes.emptyListText}
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
            <div className={classes.footer}>
                <Link to="/add">
                    <Fab className={classes.addIconButton} aria-label="Add">
                        <Add />
                    </Fab>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default List;
