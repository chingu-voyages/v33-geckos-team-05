import React from "react";
import "./LandingPage.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <header id="showcase">
        <h1>Welcome To Device Loaner</h1>
        <p>We have all your IT device needs</p>
        <Link to="/registration" class="button">
          Read More
        </Link>
      </header>
      <section id="section-cell">
        <p class="section-desc">All devices</p>
        <Link to="/registration" class="button">
          See All Devices
        </Link>
      </section>
      <section id="section-misc">
        <p class="section-desc">Device Log</p>
        <Link to="/registration" class="button">
          Reserve A Device
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
