import React, { Component } from "react";
import AppContext from "../App/AppContext";

export default class QuestionComplex extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="complex-options-container">
        <label className="adventurous-header header">
          feeling adventurous?
        </label>
        <ul className="complex-options-list option-list">
          <li className="complex-option">
            <a
              className="button-to-recipe"
              href="#foo"
              onClick={() => {
                this.context.updateComplex("yes");
              }}
            >
              yes
            </a>
          </li>
          <li className="complex-option">
            <a
              className="button-to-recipe"
              href="#bar"
              onClick={() => {
                this.context.updateComplex("no");
              }}
            >
              no
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
