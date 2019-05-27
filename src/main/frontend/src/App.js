import React from "react";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </div>
);

export default App;
