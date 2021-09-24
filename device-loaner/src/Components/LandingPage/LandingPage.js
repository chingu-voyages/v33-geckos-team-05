import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <header id="showcase">
        <h1>Welcome To Device Loaner</h1>
        <p>We have all your IT device needs</p>
        <a href="#" class="button">
          Read More
        </a>
      </header>
      <section id="section-cell">
        <p class="section-desc">All devices</p>
        <a href="#" class="button">
          See All Devices
        </a>
      </section>
      <section id="section-misc">
        <p class="section-desc">Device Log</p>
        <a href="#" class="button">
          Reserve A Device
        </a>
      </section>
    </div>
  );
}

export default LandingPage;