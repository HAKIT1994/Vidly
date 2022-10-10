import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password").min(5),
  };

  doSubmit = () => {
    console.log("submited");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("username", "Username")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
