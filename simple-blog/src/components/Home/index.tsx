import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { allPostsToStore } from "../../redux/actions/allPostsActions";
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles(theme => ({
  navbarRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleTypography: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bodyTypography: {
    fontSize: 14,
  },
  listRoot: {
    marginTop: 15,
    width: "100%",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  cardRoot: {
    minWidth: 400,
    marginBottom: 15,
    cursor: "pointer",
  },
  mainContainer: {
    marginTop: 15,
  },
  mainButton: {
    marginBottom: 20,
  },
  number: {
    marginLeft: "100%",
  },
  box: {
    marginRight: "5%",
  },
}));

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [postsQuantity, setPostsQuantity] = useState<number>(0);

  const dispatch = useDispatch();

  const allPostsfromStore: any = useSelector(
    (state: any) => state.allPostsReducer.allPosts
  );

  const allPosts = allPostsfromStore.reverse();

  const getAllPosts = useCallback(() => {
    dispatch(allPostsToStore());
  }, [dispatch]);

  useEffect(() => {
    console.log("homeUseEffect");
    getAllPosts();
  }, []);

  useEffect(() => {
    loadMoreProducts();
  }, [allPosts]);

  const loadMoreProducts = () => {
    setTimeout(function() {
      const totalPostCount: number = allPosts.length;
      if (allPosts.length < 1) return;
      const step = 12;
      let addPosts = [];
      let i = postsQuantity;
      for (i; i <= postsQuantity + step; i++) {
        if (i <= totalPostCount) {
          addPosts.push(allPosts[i]);
        }
      }
      setPosts([...posts, ...addPosts]);
      setPostsQuantity(i);
    }, 1500);
  };

  const history = useHistory();

  const handleClick = (itemId: number) => {
    history.push("/posts/" + itemId);
  };

  const handleClickNewPost = () => {
    history.push("/posts/new");
  };

  const classes = useStyles();
  const postList = (allPosts: any[]) => {
    return (
      <Container className={classes.mainContainer}>
        <Button
          className={classes.mainButton}
          variant="contained"
          onClick={handleClickNewPost}
        >
          Create New Post
        </Button>

        {allPosts.map(
          item =>
            item && (
              <Card
                className={classes.cardRoot}
                onClick={() => handleClick(item.id)}
                key={item.id}
              >
                <CardContent>
                  <Typography className={classes.titleTypography}>
                    {item.data ? item.data.title : item.title}
                  </Typography>
                  <Divider />
                  <Typography className={classes.bodyTypography}>
                    {item.data ? item.data.body : item.body}
                    <Box className={classes.box}>
                      <span className={classes.number}> {item.id}</span>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            )
        )}
      </Container>
    );
  };
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMoreProducts}
      hasMore={postsQuantity < allPosts.length}
      loader={
        <div className="spinner">
          <img src="/DevelopsToday/simple-blog/dist/spinner.svg" />
        </div>
      }
    >
      {postList(posts)}
    </InfiniteScroll>
  );
};

export default Home;
