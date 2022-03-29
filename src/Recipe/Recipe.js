import React, { Component } from "react";
import AppContext from "../App/AppContext";
import "./Recipe.css";
import ApiService from "../Api/api-service";
import Uhoh from "../Uhoh/Uhoh";

export default class Recipe extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      recipeDetails: [],
      recipeIngredients: [],
      recipeInstructions: [],
      done: "no",
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    ApiService.getAll(id)
      .then((response) => {
        this.setState({
          recipeDetails: response[0],
          recipeIngredients: response[1],
          recipeInstructions: response[2],
          done: "yes",
        });
      })
      .catch((e) => console.log("Promise.all e", e));
  }

  recDetails = () => {
    return this.state.recipeDetails.map((item, i) => {
      return (
        <ul key={i}>
          <li>name: {item.name}</li>
          <li>cuisine: {item.cuisine}</li>
          <li>complex: {item.complex === false ? "nope" : "yep"}</li>
          <li>prep time: {item.prep_time}</li>
          <li>cook time: {item.cook_time}</li>
        </ul>
      );
    });
  };

  recIngs = () => {
    return this.state.recipeIngredients.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.amount}</td>
        </tr>
      );
    });
  };

  recInstr = () => {
    return this.state.recipeInstructions.map((item, i) => {
      return (
        <React.Fragment key={i}>
          <li>
            Step {i + 1}: {item.instructions}
          </li>
        </React.Fragment>
      );
    });
  };

  render() {
    return this.state.recipeDetails.length > 0 ? (
      <section>
        {this.recDetails()}
        <section>
          <h3>INGREDIENTS</h3>
          <table>
            <tbody>
              <tr>
                <td>ITEM</td>
                <td>AMOUNT</td>
              </tr>
              {this.recIngs()}
            </tbody>
          </table>
        </section>
        <section>
          <h3>INSTRUCTIONS</h3>
          <ul>{this.recInstr()}</ul>
        </section>
      </section>
    ) : this.state.done === "yes" ? (
      <Uhoh />
    ) : null;
  }
}
