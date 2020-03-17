import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import CreatePostPage from "../pages/CreatePostPage";
import NavBar from "../components/Navbar";

const Routes = () => {
  const basePath = "/DevelopsToday/simple-blog/dist";

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={`${basePath}/`} component={HomePage} />
        <Route path={`${basePath}/posts/new`} component={CreatePostPage} />
        <Route path={`${basePath}/posts/:postId`} component={PostPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
