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

  recDetails = () => {
    return this.state.recipeDetails.map((item, i) => {
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
    });
  };

  recIngs = () => {
    return this.state.recipeIngredients.map((item, i) => {
      return (
        <tr key={i} className="ing-row">
          <td className="specific-ing-item">{item.name}</td>
          <td className="specific-ing-item">{item.amount}</td>
        </tr>
      );
    });
  };

  recInstr = () => {
    return this.state.recipeInstructions.map((item, i) => {
      return (
        <React.Fragment key={i}>
          <li className="specific-instrc-item">
            Step {i + 1}: {item.instructions}
          </li>
        </React.Fragment>
      );
    });
  };

  render() {
    return this.state.recipeDetails.length > 0 ? (
      <section className="specific-container">
        {this.recDetails()}
        <section className="ing-container">
          <h3 className="specific-ing-header">INGREDIENTS</h3>
          <table className="specific-ing-list">
            <tbody>
              <tr className="table-header-row">
                <td className="specific-ing-item">ITEM</td>
                <td className="specific-ing-item">AMOUNT</td>
              </tr>
              {this.recIngs()}
            </tbody>
          </table>
        </section>
        <section className="instr-container">
          <h3 className="specific-instrc-header">INSTRUCTIONS</h3>
          <ul className="specific-instrc-list">{this.recInstr()}</ul>
        </section>
      </section>
    ) : this.state.done === "yes" ? (
      <Uhoh />
    ) : null;
  }
}
