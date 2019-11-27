import React, { Component } from "react";
import AppContext from "../App/AppContext";
import "./Recipe.css";
import ApiService from "../Api/api-service";
import Uhoh from "./Uhoh";

export default class Recipe extends Component {
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
              <li className="recipe-name">name: {item.name}</li>
              <li className="recipe-cuisine">cuisine: {item.cuisine}</li>
              <li className="recipe-complex">
                complex: {item.complex === false ? "nope" : "yep"}
              </li>
              <li className="recipe-prep-time">prep time: {item.prep_time}</li>
              <li className="recipe-cook-time">cook time: {item.cook_time}</li>
            </ul>
          );
        })}
        <section className="ing-container">
          <h3 className="specific-ing-header">ingredients</h3>
          <ul className="specific-ing-list">
            {this.state.recipeIngredients.map((item, i) => {
              return (
                <li key={i} className="specific-ing-item">
                  {i + 1}: {item.name}, {item.amount}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="instr-container">
          <h3 className="specific-instrc-header">instructions</h3>
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
      </section>
    ) : this.state.done === "yes" ? (
      <Uhoh />
    ) : null;
  }
}
