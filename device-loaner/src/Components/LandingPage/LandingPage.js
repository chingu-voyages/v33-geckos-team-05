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
        <p class="section-desc">Cell Phones & Laptops</p>
        <a href="#" class="button">
          See Devices
        </a>
      </section>
      <section id="section-misc">
        <p class="section-desc">Miscellaneous</p>
        <a href="#" class="button">
          See Devices
        </a>
      </section>
      <section id="section-other">
        <div class="box-1">
          Have a tough problem? Speak to a technician! Let's see how we can
          help.
        </div>
        <div class="box-2">
          Track Devices on our device log. See what's available and book your
          device for the exact time you need it.
        </div>
        <div class="box-3">
          View our inventory. See what we have available and component specs.
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
