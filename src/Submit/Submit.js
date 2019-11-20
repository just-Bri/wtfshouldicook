import React, { Component } from "react";
import "./Submit.css";

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pictureUrl: "",
      prepTime: "",
      cookTime: "",
      ingredients: [],
      instructions: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addIngredientField = () => {
    this.setState({
      ingredients: [...this.state.ingredients, { name: "", amount: "" }]
    });
  };
  addInstructionField = () => {
    this.setState({
      instructions: [...this.state.instructions, { step: "" }]
    });
  };
  handleInstrChange = e => {
    let instrc = this.state.instructions;
    instrc[e.target.name].step = e.target.value;
    this.setState({ instructions: instrc });
  };

  handleIngChange = e => {
    let ings = this.state.ingredients;
    if (e.target.className === "ingredient-name") {
      ings[e.target.name].name = e.target.value;
    } else if (e.target.className === "ingredient-amount") {
      ings[e.target.name].amount = e.target.value;
    }
    this.setState({ ingredients: ings });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.ingredients.length < 2
      ? alert("please add some ing")
      : console.log(this.state, "recipe submitted!");
    // call a POST to api!
  };

  render() {
    let { ingredients, instructions } = this.state;
    return (
      <form className="submit-form" onSubmit={this.handleSubmit}>
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
            <section className="url-container">
              <label>Picture Url</label>
              <input
                type="text"
                onChange={this.handleChange}
                name="pictureUrl"
                value={this.state.pictureUrl}
              />
            </section>
            <section className="prep-container">
              <label>Prep Time</label>
              <input
                type="number"
                onChange={this.handleChange}
                name="prepTime"
                placeholder="in minutes"
                required
              />
            </section>
            <section className="cook-container">
              <label>Cook Time</label>
              <input
                type="number"
                onChange={this.handleChange}
                name="cookTime"
                placeholder="in minutes"
                required
              />
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
                    onChange={e => this.handleIngChange(e)}
                    required
                  />
                  <label htmlFor={amountId}>{`Amount #${idx + 1}`}</label>
                  <input
                    className="ingredient-amount"
                    type="text"
                    name={`${idx}`}
                    onChange={e => this.handleIngChange(e)}
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
        <input type="submit" value="Submit!" className="recipe-submit-button" />
      </form>
    );
  }
}
