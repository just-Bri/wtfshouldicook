import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppContext from "./AppContext";
import OpeningQuestion from "../Questions/QuestionOpening";
import QuestionCuisine from "../Questions/QuestionCuisine";
import QuestionComplex from "../Questions/QuestionComplex";
import Recipe from "../Recipe/Recipe";
import SpecRecipe from "../Recipe/SpecRecipe";
import TopBar from "../TopBar/TopBar";
import Submit from "../Submit/Submit";
import ApiService from "../Api/api-service";
import "../config";
import Uhoh from "../Recipe/Uhoh";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      craving: "",
      cuisine: "",
      complex: "",
      recipe: "will come from the api"
      // loggedIn: false
    };
  }

  updateCraving = craving => {
    // console.log("this.state.craving is being set to: " + craving);
    this.setState({
      craving: craving
    });
  };
  updateCuisine = cuisine => {
    // console.log("this.state.cuisine is being set to: " + cuisine);
    this.setState({
      cuisine: cuisine
    });
  };
  updateComplex = complex => {
    // console.log("this.state.complex is being set to: " + complex);
    this.setState({
      complex: complex
    });
  };
  getRecipe = () => {
    ApiService.getRecipe(this.state);
  };

  render() {
    return (
      <section className="App">
        <AppContext.Provider
          value={{
            updateCraving: this.updateCraving,
            updateCuisine: this.updateCuisine,
            updateComplex: this.updateComplex,
            recipeToDisplay: this.state.recipe,
            getRecipe: this.getRecipe
            // on hold
            // loggedIn: this.state.loggedIn,
            // logIn: this.logIn,
            // logOut: this.ogOut
          }}
        >
          <TopBar />
          <main>
            <Router>
              <Route exact path="/">
                <OpeningQuestion />
              </Route>
              <Route exact path="/cuisine">
                {this.state.craving === "" ? (
                  <OpeningQuestion />
                ) : (
                  <QuestionCuisine />
                )}
              </Route>
              <Route exact path="/complex">
                {this.state.craving === "" ? (
                  <OpeningQuestion />
                ) : (
                  <QuestionComplex />
                )}
              </Route>
              <Route exact path="/recipe/">
                {this.state.complex === "" ? <OpeningQuestion /> : <Recipe />}
              </Route>
              <Route
                exact
                path="/recipes/:id"
                render={props => <SpecRecipe {...props} />}
              />
              <Route exact path="/submit">
                <Submit />
              </Route>
              <Route exact path="/recipe/uhoh">
                <Uhoh />
              </Route>
            </Router>
          </main>
        </AppContext.Provider>
      </section>
    );
  }
}
