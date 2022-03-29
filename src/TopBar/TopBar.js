import React, { Component } from "react";
import AppContext from "../App/AppContext";

export default class TopBar extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section>
        <a href="/">get a recipe</a>
        <a href="/submit">submit a recipe</a>
      </section>
    );
  }
}
