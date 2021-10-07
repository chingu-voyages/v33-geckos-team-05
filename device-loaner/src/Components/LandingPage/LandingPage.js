import React from "react";
import "./LandingPage.css";
import Navbar from "../../pages/NavBar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function LandingPage() {
  return (
    <Router>
      <div>
        <header id="showcase">
          <h1>Welcome To Device Loaner</h1>
          <p>We have all your IT device needs</p>
          <nav>
            <ul>
              <li>
                <Link to="/form" class="button">
                  Read More{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/form">
              <Navbar />
            </Route>
          </Switch>
        </header>
        <section id="section-cell">
          <p class="section-desc">All devices</p>
          <nav>
            <ul>
              <li>
                <Link to="/form" class="button">
                  See All Devices{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section id="section-misc">
          <p class="section-desc">Device Log</p>
          <nav>
            <ul>
              <li>
                <Link to="/form" class="button">
                  Reserve a Device{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </Router>
  );
}

export default LandingPage;
