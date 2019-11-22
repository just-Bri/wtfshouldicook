import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppContext from "./AppContext";
import OpeningQuestion from "../Questions/QuestionOpening";
import QuestionCuisine from "../Questions/QuestionCuisine";
import QuestionComplexity from "../Questions/QuestionComplexity";
import Recipe from "../Recipe/Recipe";
import SpecRecipe from "../Recipe/SpecRecipe";
import TopBar from "../TopBar/TopBar";
import Submit from "../Submit/Submit";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      craving: "",
      cuisine: "",
      complexity: "",
      recipe: "will come from the api",
      loggedIn: false
    };
  }

  // Need to setup api and routes for get/post etc

  logIn = e => {
    e.preventDefault();
    this.setState({
      loggedIn: true
    });
  };

  logOut = e => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    });
  };

  updateCraving = craving => {
    console.log("this.state.craving is being set to: " + craving);
    this.setState({
      craving: craving
    });
  };

  updateCuisine = cuisine => {
    console.log("this.state.cuisine is being set to: " + cuisine);
    this.setState({
      cuisine: cuisine
    });
  };

  getRecipe = () => {
    // fetch using this.state.cuisine && this.state.complexity
    console.log("getRecipe called");
  };

  updateComplexity = complexity => {
    console.log("this.state.complexity is being set to: " + complexity);
    this.setState({
      complexity: complexity
    });
  };
  SubmitRecipe = recipe => {
    console.log(recipe);
  };

  render() {
    return (
      <section className="App">
        <AppContext.Provider
          value={{
            updateCraving: this.updateCraving,
            updateCuisine: this.updateCuisine,
            updateComplexity: this.updateComplexity,
            SubmitRecipe: this.SubmitRecipe,
            recipeToDisplay: this.state.recipe,
            loggedIn: this.state.loggedIn,
            logIn: this.logIn,
            logOut: this.ogOut
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
              <Route exact path="/complexity">
                {this.state.craving === "" ? (
                  <OpeningQuestion />
                ) : (
                  <QuestionComplexity />
                )}
              </Route>
              <Route exact path="/recipe/">
                {this.state.complexity === "" ? (
                  <OpeningQuestion />
                ) : (
                  <Recipe />
                )}
              </Route>
              <Route exact path="/recipes/:id">
                <SpecRecipe recipeId={1} />
              </Route>
              <Route exact path="/submit">
                <Submit />
              </Route>
            </Router>
          </main>
        </AppContext.Provider>
      </section>
    );
  }
}
