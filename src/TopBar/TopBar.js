import React, { Component } from "react";
import AppContext from "../App/AppContext";
import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <section className="top-bar">
            <a href="/">Start</a>
            {value.loggedIn ? (
              <>
                <a href="/account" className="top-account-button">
                  Account
                </a>
                <a href="/logout" className="top-logout-button">
                  Logout
                </a>
                {/* function to logout */}
              </>
            ) : (
              <a href="/login" className="top-login-button">
                Login
              </a>
            )}
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}
