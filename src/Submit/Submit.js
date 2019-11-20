import React, { Component } from "react";
import "./Submit.css";

export default class Submit extends Component {
  state = {
    ingredients: [{ name: "", amount: "" }],
    ingName: "",
    ingAmount: "",
    hardware: [{ name: "" }],
    hardwareName: ""
  };

  addIngredientField = e => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, { name: "", amount: "" }]
    }));
  };

  handleAddIng = e => {
    e.preventDefault();
    if (["name", "amount"].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ingredients }, () => console.log(this.state.ingredients));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addHardwareField = e => {
    this.setState(prevState => ({
      hardware: [...prevState.hardware, { name: "" }]
    }));
  };

  handleAddHardware = e => {
    e.preventDefault();
    if (["name"].includes(e.target.className)) {
      let hardware = [...this.state.hardware];
      hardware[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ hardware }, () => console.log(this.state.hardware));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addHardware = {};
  render() {
    let { ingredients, hardware } = this.state;
    return (
      <form className="submit-form" onSubmit={this.handleSubmit}>
        <fieldset className="submit-fieldset">
          <legend className="main-legend">Submit a new recipe!</legend>
          <fieldset className="details-fieldset">
            <section className="name-container">
              <label>Name</label>
              <input type="text" required />
            </section>
            <section className="url-container">
              <label>Picture Url</label>
              <input type="text" />
            </section>
            <section className="prep-container">
              <label>Prep Time</label>
              <input type="number" />
            </section>
            <section className="cook-container">
              <label>Cook Time</label>
              <input type="number" />
            </section>
          </fieldset>
          <fieldset className="ingredients-fieldset">
            <legend>Ingredients</legend>
            <button onClick={this.addIngredientField}>Add ingredient</button>
            {ingredients.map((val, idx) => {
              let ingId = `ing-${idx}`,
                amountId = `amount-${idx}`;
              return (
                <div key={idx}>
                  <label htmlFor={ingId}>{`Ing #${idx + 1}`}</label>
                  <input type="text"></input>
                  <label htmlFor={amountId}>{`Amnt #${idx + 1}`}</label>
                  <input type="number"></input>
                </div>
              );
            })}
          </fieldset>
          <fieldset className="hardware-fieldset">
            <legend>Hardware</legend>
            <button onClick={this.addHardwareField}>Add hardware</button>
            {hardware.map((val, idx) => {
              let hardwareId = `hardware-${idx}`;
              return (
                <div key={idx}>
                  <label htmlFor={hardwareId}>{`Ing #${idx + 1}`}</label>
                  <input type="text"></input>
                </div>
              );
            })}
          </fieldset>
        </fieldset>
        <input type="submit" value="Submit!" />
      </form>
    );
  }
}
