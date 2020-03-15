import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";


import HomePage from "../pages/HomePage";


const Routes = () => {
  useEffect(() => { 
  }, []);

  return  (      
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/admin" component={} /> */}
      <Redirect to="/" />
    </Switch>
  )
};

function mapStateToProps(state) {
  return {
    preloader: state.loginReducer.loginPreloader,
  };
}

export default Routes
