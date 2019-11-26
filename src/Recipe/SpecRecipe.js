import React, { Component } from "react";
import AppContext from "../App/AppContext";
import "./SpecRecipe.css";
import ApiService from "../Api/api-service";
import Uhoh from "./Uhoh";

export default class SpecRecipe extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      recipeDetails: [],
      recipeIngredients: [],
      recipeInstructions: [],
      done: "no"
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    ApiService.getAll(id)
      .then(response => {
        this.setState({
          recipeDetails: response[0],
          recipeIngredients: response[1],
          recipeInstructions: response[2],
          done: "yes"
        });
      })
      .catch(e => console.log("Promise.all e", e));
  }

  render() {
    return this.state.recipeDetails.length > 0 ? (
      <section className="specific-container">
        {this.state.recipeDetails.map((item, i) => {
          return (
            <ul key={i} className="specific-details">
              <li>Name: {item.name}</li>
              <li>Prep time: {item.prep_time}</li>
              <li>Cook time: {item.cook_time}</li>
              <li>Cuisine: {item.cuisine}</li>
              <li>complex: {item.complex === false ? "nope" : "yep"}</li>
            </ul>
          );
        })}
        <h3 className="specific-ing-header">Ingredients</h3>
        <ul className="specific-ing-list">
          {this.state.recipeIngredients.map((item, i) => {
            return (
              <li key={i} className="specific-ing-item">
                {i + 1}: {item.name}, {item.amount}
              </li>
            );
          })}
        </ul>
        <h3 className="specific-instrc-header">Instructions</h3>
        <ul className="specific-instrc-list">
          {this.state.recipeInstructions.map((item, i) => {
            return (
              <li key={i} className="specific-instrc-item">
                Step {i + 1}: {item.instructions}
              </li>
            );
          })}
        </ul>
      </section>
    ) : this.state.done === "yes" ? (
      <Uhoh />
    ) : null;
  }
}
