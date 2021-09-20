import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email"></label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              name="email"
              placeholder="Enter your company email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password"></label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              name="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" href="#" className="FormField__Link">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
