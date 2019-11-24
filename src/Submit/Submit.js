import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Submit.css";
// import config from "../config";
import ApiService from "../Api/api-service";

import AppContext from "../App/AppContext";

class Submit extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      // picture_url: "",
      prep_time: "",
      cook_time: "",
      cuisine: "british",
      complexity: 1,
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
    // .then(this.props.history.push(`/`))
    // .catch(e => console.log(e));
  };

  render() {
    let { ingredients, instructions } = this.state;
    return (
      <form className="submit-form" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset className="submit-fieldset">
          <legend className="main-legend">Submit a new recipe!</legend>
          <fieldset className="details-fieldset">
            <section className="name-container">
              <label>Name</label>
              <input
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
              <label>Cuisine</label>
              <select name="cuisine" onChange={this.handleChange}>
                <option value="british">British</option>
                <option value="chinese">Chinese</option>
                <option value="french">French</option>
                <option value="indian">Indian</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
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
              <label>Prep Time</label>
              <input
                type="number"
                onChange={this.handleNumberChange}
                name="prep_time"
                placeholder="in minutes"
                required
              />
            </section>
            <section className="cook-container">
              <label>Cook Time</label>
              <input
                type="number"
                onChange={this.handleNumberChange}
                name="cook_time"
                placeholder="in minutes"
                required
              />
            </section>

            <section className="complexity-container">
              <label>Complexity</label>
              <select name="complexity" onChange={this.handleCompChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </section>
          </fieldset>
          <fieldset className="ingredients-fieldset">
            <legend>Ingredients</legend>
            <button onClick={this.addIngredientField}>Add Ingredient</button>
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
            <legend>Instructions</legend>
            <button onClick={this.addInstructionField}>Add Instruction</button>
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
        <button type="submit" className="recipe-submit-button">
          Submit!
        </button>
      </form>
    );
  }
}

export default withRouter(Submit);
