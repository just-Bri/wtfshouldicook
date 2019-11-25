import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

export default class QuestionOpening extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="opening-question">
        <h3 className="opening-header header">
          Answer a few simple questions and get a recipe!
        </h3>
        <label className="header">Craving a certain cuisine?</label>
        <ul className="craving-options option-list">
          <li className="craving-option-container">
            <Link
              className="link-to-cuisine"
              to="/cuisine"
              onClick={() => {
                this.context.updateCraving("yes");
              }}
            >
              Yes!
            </Link>
          </li>
          <li className="craving-option-container">
            <Link
              className="link-to-complex"
              to="/complex"
              onClick={() => {
                this.context.updateCraving("no");
              }}
            >
              No.
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}
