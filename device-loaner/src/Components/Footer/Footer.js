import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>Contact Us</h5>
            <h6 className="list-unstyled"></h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h6>FAQ</h6>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Device Loaner | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
