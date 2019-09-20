import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from '../src/components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/BubblesPage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
