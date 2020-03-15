import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";


import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import CreatePostPage from "../pages/CreatePostPage";


const Routes = () => {
  useEffect(() => { 
  }, []);

  return  (      
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/posts" component={PostPage} />
      <Route path="/createPost" component={CreatePostPage} />
      <Redirect to="/" />
    </Switch>
  )
};


export default Routes
