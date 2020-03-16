import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>       
          <Routes />       
      </BrowserRouter>
     </Provider>
  );
}

export default App;
