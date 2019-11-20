import React, { Component } from "react";
import AppContext from "../App/AppContext";
import "./TopBar.css";

export default class TopBar extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="top-bar">
        <a href="/">Get a Recipe!</a>
        <a href="/submit">Submit a Recipe!</a>
        {/* The below will be added once user accounts are implimented */}
        {/* {this.context.loggedIn ? (
          <>
            <a href="/account" className="top-account-button">
              Account
            </a>
            <a
              href="/"
              onClick={e => this.context.logOut(e)}
              className="top-logout-button"
            >
              Logout
            </a>
          </>
        ) : (
          <a
            href="/"
            onClick={e => this.context.logIn(e)}
            className="top-login-button"
          >
            Login
          </a>
        )} */}
      </section>
    );
  }
}
