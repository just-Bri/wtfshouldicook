import React, { Component } from "react";
import AppContext from "../App/AppContext";
import config from "../config";

export default class SpecRecipe extends Component {
  static contextType = AppContext;
  state = {
    recipeDetails: [],
    recipeIngredients: []
  };

  getRecipeDetails = new Promise(() => {
    fetch(`${config.API_ENDPOINT}/api/recipe/${this.props.recipeId}`)
      .then(response => {
        return response.json();
      })
      .then(recipe => {
        this.setState({ recipeDetails: recipe });
      });
  });
  getRecipeIngredients = new Promise(() => {
    fetch(`${config.API_ENDPOINT}/api/ingredient/${this.props.recipeId}`)
      .then(response => {
        return response.json();
      })
      .then(ingredients => {
        this.setState({ recipeIngredients: ingredients });
      });
  });
  getRecipeIngredientAmounts = new Promise(() => {});

  componentDidMount() {
    Promise.all([this.getRecipeDetails, this.getRecipeIngredients]).catch(e =>
      console.log(e)
    );
  }

  render() {
    console.log(this.state);
    return (
      <section>
        {this.state.recipeDetails.map((item, i) => {
          // console.log(item);
          return (
            <ul key={i}>
              <li>Name: {item.name}</li>
              <li>Prep time: {item.prep_time}</li>
              <li>Cook time: {item.cook_time}</li>
              <li>Cuisine: {item.cuisine}</li>
              <li>Complexity: {item.complexity}</li>
            </ul>
          );
        })}
      </section>
    );
  }
}
