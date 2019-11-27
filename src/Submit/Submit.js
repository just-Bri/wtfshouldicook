import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Submit.css";
import ApiService from "../Api/api-service";

import AppContext from "../App/AppContext";

class Submit extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      prep_time: "",
      cook_time: "",
      cuisine: "british",
      complex: "no",
      ingredients: [],
      instructions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleIngChange = this.handleIngChange.bind(this);
    this.handleInstrChange = this.handleInstrChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleNumberChange(e) {
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  }

  addIngredientField = () => {
    this.setState({
      ingredients: [...this.state.ingredients, { name: "", amount: "" }]
    });
  };
  addInstructionField = () => {
    this.setState({
      instructions: [...this.state.instructions, { instructions: "" }]
    });
  };
  handleInstrChange = e => {
    let instrc = [...this.state.instructions];
    instrc[e.target.name].instructions = e.target.value;
    this.setState({ instructions: instrc });
  };

  handleIngChange = (e, piece) => {
    let ings = [...this.state.ingredients];
    if (piece === "name") {
      ings[e.target.name].name = e.target.value;
    } else if (piece === "amount") {
      ings[e.target.name].amount = e.target.value;
    }
    this.setState({ ingredients: ings });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.ingredients.length < 2) {
      alert("Please add more ingredients");
    } else if (this.state.instructions.length < 2) {
      alert("Please add more instructions");
    } else {
      ApiService.submitRecipe(this.state);
    }
  };

  render() {
    let { ingredients, instructions } = this.state;
    return (
      <form className="submit-form" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset className="submit-fieldset">
          <legend className="main-legend">submit a new recipe</legend>
          <fieldset className="details-fieldset">
            <section className="name-container">
              <label>name:</label>
              <input
                className="input-name"
                type="text"
                onChange={this.handleChange}
                name="name"
                required
              />
            </section>
            <section className="cuisine-container">
              {/* <label>Cuisine</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="cuisine"
                placeholder="Mexican, Italian etc..."
                required
              /> */}
              <label>cuisine:</label>
              <select
                className="input-cuisine"
                name="cuisine"
                onChange={this.handleChange}
              >
                <option value="british">british</option>
                <option value="chinese">chinese</option>
                <option value="french">french</option>
                <option value="indian">indian</option>
                <option value="italian">italian</option>
                <option value="mexican">mexican</option>
              </select>
            </section>
            {/* <section className="url-container">
              <label>Picture Url</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="picture_url"
                value={this.state.picture_url}
              />
            </section> */}
            <section className="prep-container">
              <label>prep time:</label>
              <input
                className="input-prep"
                type="number"
                onChange={this.handleNumberChange}
                name="prep_time"
                placeholder="in minutes"
                required
              />
            </section>
            <section className="cook-container">
              <label>cook time:</label>
              <input
                className="input-cook"
                type="number"
                onChange={this.handleNumberChange}
                name="cook_time"
                placeholder="in minutes"
                required
              />
            </section>

            <section className="complex-container">
              <label>is it complex?</label>
              <select
                className="input-complex"
                name="complex"
                onChange={this.handleChange}
              >
                <option value="no">no</option>
                <option value="yes">yes</option>
              </select>
            </section>
          </fieldset>
          <fieldset className="ingredients-fieldset">
            <legend>ingredients</legend>
            <button
              className="add-ing-button"
              onClick={this.addIngredientField}
            >
              add ingredient
            </button>
            {ingredients.map((val, idx) => {
              let ingId = `ing-${idx}`,
                amountId = `amount-${idx}`;
              return (
                <section key={idx} className="ingredients-input-container">
                  <label
                    htmlFor={ingId}
                    className="ingredient-name-label"
                  >{`Ingredient #${idx + 1}`}</label>
                  <input
                    className="ingredient-name"
                    type="text"
                    name={`${idx}`}
                    onChange={e => this.handleIngChange(e, "name")}
                    required
                  />
                  <label htmlFor={amountId}>{`Amount #${idx + 1}`}</label>
                  <input
                    className="ingredient-amount"
                    type="text"
                    name={`${idx}`}
                    onChange={e => this.handleIngChange(e, "amount")}
                    required
                  />
                </section>
              );
            })}
          </fieldset>
          <fieldset className="instructions-fieldset">
            <legend>instructions</legend>
            <button
              className="add-instr-button"
              onClick={this.addInstructionField}
            >
              add instruction
            </button>
            {instructions.map((val, idx) => {
              let instrcId = `ing-${idx}`;
              return (
                <section key={idx} className="instructions-input-container">
                  <label
                    htmlFor={instrcId}
                    className="instructions-name-label"
                  >{`Step #${idx + 1}`}</label>
                  <textarea
                    className="instructions-name"
                    name={`${idx}`}
                    onChange={e => this.handleInstrChange(e)}
                    required
                  />
                </section>
              );
            })}
          </fieldset>
        </fieldset>
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
    );
  }
}

export default withRouter(Submit);
