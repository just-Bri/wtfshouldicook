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
    this.removeIngredientField = this.removeIngredientField.bind(this);
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
  removeIngredientField = (e, val) => {
    e.preventDefault();
    let ings = Array.from(this.state.ingredients);
    let blah = ings.filter(item => item !== val);
    this.setState({
      ingredients: blah
    });
  };

  addInstructionField = () => {
    this.setState({
      instructions: [...this.state.instructions, { instructions: "" }]
    });
  };
  removeInstructionField = (e, val) => {
    e.preventDefault();
    let ings = Array.from(this.state.instructions);
    let blah = ings.filter(item => item !== val);
    this.setState({
      instructions: blah
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

  renderInstrInputs = () => {
    return this.state.instructions.map((val, idx) => {
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
            value={val.instructions}
            onChange={e => this.handleInstrChange(e)}
            required
          />
          <button
            className="del-this instr-button"
            onClick={e => this.removeInstructionField(e, val)}
          >
            remove
          </button>
        </section>
      );
    });
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
    // console.log(this.state);
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
              <label>cuisine:</label>
              <select
                className="input-cuisine"
                name="cuisine"
                onChange={this.handleChange}
              >
                <option value="american">american</option>
                <option value="british">british</option>
                <option value="chinese">chinese</option>
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
            {this.state.ingredients.length > 0
              ? this.state.ingredients.map((val, idx) => {
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
                        value={val.name}
                        onChange={e => this.handleIngChange(e, "name")}
                        required
                      />
                      <label htmlFor={amountId}>{`Amount #${idx + 1}`}</label>
                      <input
                        className="ingredient-amount"
                        type="text"
                        value={val.amount}
                        name={`${idx}`}
                        onChange={e => this.handleIngChange(e, "amount")}
                        required
                      />
                      <button
                        className="del-this"
                        onClick={e => this.removeIngredientField(e, val)}
                      >
                        remove
                      </button>
                    </section>
                  );
                })
              : null}
          </fieldset>
          <fieldset className="instructions-fieldset">
            <legend>instructions</legend>
            <button
              className="add-instr-button"
              onClick={this.addInstructionField}
            >
              add instruction
            </button>
            {this.renderInstrInputs()}
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
