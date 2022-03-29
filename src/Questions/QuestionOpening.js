import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

export default class QuestionOpening extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section>
        <h3>answer a few simple questions and get a recipe</h3>
        <label>craving a certain cuisine?</label>
        <ul>
          <li>
            <Link
              to="/cuisine"
              onClick={() => {
                this.context.updateCraving("yes");
              }}
            >
              yes
            </Link>
          </li>
          <li>
            <Link
              to="/complex"
              onClick={() => {
                this.context.updateCraving("no");
              }}
            >
              no
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}
