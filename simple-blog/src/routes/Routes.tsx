import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import CreatePostPage from "../pages/CreatePostPage";
import NavBar from "../components/Navbar";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts/new" component={CreatePostPage} />
        <Route path="/posts/:postId" component={PostPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
