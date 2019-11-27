import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

export default class QuestionCuisine extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section className="cuisine-options-container">
        <label className="cuisine-header header">what sounds good?</label>
        <ul className="cuisine-options-list option-list">
          {/* FIX */}
          {/* Refactor this to a function that pulls
              cuisine options from the database */}
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complex"
              onClick={() => {
                this.context.updateCuisine("british");
              }}
            >
              british
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complex"
              onClick={() => {
                this.context.updateCuisine("chinese");
              }}
            >
              chinese
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complex"
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
              to="/complex"
              onClick={() => {
                this.context.updateCuisine("indian");
              }}
            >
              indian
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complex"
              onClick={() => {
                this.context.updateCuisine("italian");
              }}
            >
              italian
            </Link>
          </li>
          <li className="cuisine-option">
            <Link
              className="cuisine-link"
              to="/complex"
              onClick={() => {
                this.context.updateCuisine("mexican");
              }}
            >
              mexican
            </Link>
          </li>
          {/* FIX */}
        </ul>
      </section>
    );
  }
}
