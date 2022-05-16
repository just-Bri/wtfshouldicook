import React, { Component } from "react";
import AppContext from "../App/AppContext";

export default class TopBar extends Component {
  static contextType = AppContext;
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/open">get a recipe</a></li>
          <li><a href="/submit">submit a recipe</a></li>
        </ul>
      </nav>
    );
  }
}
