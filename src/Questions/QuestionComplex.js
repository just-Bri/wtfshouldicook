import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

export default class QuestionComplex extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="complex-options-container">
        <label className="adventurous-header header">
          feeling adventorous?
        </label>
        <ul className="complex-options-list option-list">
          <li className="complex-option">
            <button
              className="button-to-recipe"
              // to="/recipe"
              onClick={() => {
                this.context.updateComplex("yes");
              }}
            >
              yes
            </button>
          </li>
          <li className="complex-option">
            <button
              className="button-to-recipe"
              // to="/recipe"
              onClick={() => {
                this.context.updateComplex("no");
              }}
            >
              no
            </button>
          </li>
        </ul>
      </section>
    );
  }
}
