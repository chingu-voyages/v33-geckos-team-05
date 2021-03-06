import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./forms.css";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
      department: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");

    console.log(this.state);
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name"></label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              name="name"
              placeholder="Enter your full name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
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
            <label className="FormField__Label" htmlFor="department"></label>
            <input
              type="text"
              id="department"
              className="FormField__Input"
              name="department"
              placeholder="Enter your Department's name"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree to all statements in terms of service
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">
              I'm already registered
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
