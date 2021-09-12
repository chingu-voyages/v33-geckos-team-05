import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
      <div className="App">
        <div className="App__Form">
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">
              Sign Up
            </a>
          </div>
          <div className="FormCenter">
            <form
              onSubmit={this.handleSubmit}
              className="FormFields"
              onSubmit={this.handleSubmit}
            >
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  Company Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your Company Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="department">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  className="FormField__Input"
                  placeholder="Enter your Department"
                  name="department"
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
                  I agree to all statements in{" "}
                  <a href="" className="FormField__TermsLink">
                    terms of service
                  </a>
                </label>
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>
                <a href="#" className="FormField__Link">
                  I'm already registered
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;