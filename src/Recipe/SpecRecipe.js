import React, { Component } from "react";
import AppContext from "../App/AppContext";
import config from "../config";
import "./SpecRecipe.css";

export default class SpecRecipe extends Component {
  static contextType = AppContext;
  state = {
    recipeDetails: [],
    recipeIngredients: [],
    recipeInstructions: []
  };

  getRecipeDetails = new Promise(() => {
    fetch(`${config.API_ENDPOINT}/api/recipe/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(recipe => {
        this.setState({ recipeDetails: recipe });
      });
  });
  getRecipeIngredients = new Promise(() => {
    fetch(`${config.API_ENDPOINT}/api/ingredient/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(ingredients => {
        this.setState({ recipeIngredients: ingredients });
      });
  });
  getRecipeInstructions = new Promise(() => {
    fetch(
      `${config.API_ENDPOINT}/api/instruction/${this.props.match.params.id}`
    )
      .then(response => {
        return response.json();
      })
      .then(instructions => {
        this.setState({ recipeInstructions: instructions });
      });
  });

  componentDidMount() {
    Promise.all([
      this.getRecipeDetails,
      this.getRecipeIngredients,
      this.getRecipeInstructions
    ])
      .then(res => console.log("Promise.all", res))
      .catch(e => console.log("Promise.all e", e));
  }

  render() {
    return (
      <section className="specific-container">
        {this.state.recipeDetails.length === 0 ? (
          <>
            <h2>Uh oh</h2>
            <p>There's no recipe here!</p>
            <p>Please click 'Get a Recipe!'</p>
            <p>or 'Submit a Recipe!' above!</p>
          </>
        ) : (
          this.state.recipeDetails.map((item, i) => {
            return (
              <>
                <ul key={i} className="specific-details">
                  <li>Name: {item.name}</li>
                  <li>Prep time: {item.prep_time}</li>
                  <li>Cook time: {item.cook_time}</li>
                  <li>Cuisine: {item.cuisine}</li>
                  <li>complex: {item.complex === false ? "nope" : "yep"}</li>
                </ul>
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
              </>
            );
          })
        )}
      </section>
    );
  }
}
