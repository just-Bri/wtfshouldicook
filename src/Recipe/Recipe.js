import React, { Component } from "react";
import AppContext from "../App/AppContext";

export default class Recipe extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      recipeToDisplay: "placeholder"
    };
  }
  componentDidMount() {
    this.context.getRecipe();
  }
  render() {
    return (
      <section>
        <p>Getting recipe info...</p>
      </section>
    );
  }
}
