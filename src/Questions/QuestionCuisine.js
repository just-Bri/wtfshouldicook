import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

export default class QuestionCuisine extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="cuisine-options-container">
        <label className="cuisine-header header">What sounds good?</label>
        <ul className="cuisine-options-list option-list">
          {/* S FIX */}
          {/* Refactor this to a function that pulls
              cuisine options from the database */}
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("british");
              }}
            >
              British
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("chinese");
              }}
            >
              Chinese
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("french");
              }}
            >
              French
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("indian");
              }}
            >
              Indian
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("italian");
              }}
            >
              Italian
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complexity"
              onClick={() => {
                this.context.updateCuisine("mexican");
              }}
            >
              Mexican
            </Link>
          </li>
          {/* E FIX */}
        </ul>
      </section>
    );
  }
}
