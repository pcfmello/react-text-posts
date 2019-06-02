import React from "react";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  </div>
);

export default App;
