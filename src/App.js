import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./Pages/Page1.js";
import Page2 from "./../src/Pages/Page2";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
      </Router>
    </div>
  );
}

export default App;
