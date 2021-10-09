import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registration" component={Navbar} />
          <LandingPage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
