import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppContext from "./AppContext";
import OpeningQuestion from "../Questions/QuestionOpening";
import QuestionCuisine from "../Questions/QuestionCuisine";
import QuestionComplex from "../Questions/QuestionComplex";
import Recipe from "../Recipe/Recipe";
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
      complex: ""
    };
  }

  updateCraving = craving => {
    this.setState({
      craving: craving
    });
  };
  updateCuisine = cuisine => {
    this.setState({
      cuisine: cuisine
    });
  };
  updateComplex = complex => {
    this.setState(
      {
        complex: complex
      },
      () => this.getRecipe()
    );
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
          }}
        >
          <TopBar />
          <main>
            <Router>
              <Switch>
                <Route exact path="/">
                  <OpeningQuestion />
                </Route>
                <Route path="/cuisine">
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
                <Route
                  exact
                  path="/recipes/:id"
                  render={props => <Recipe {...props} />}
                />
                <Route exact path="/submit">
                  <Submit />
                </Route>
                <Route component={Uhoh} />
              </Switch>
            </Router>
          </main>
        </AppContext.Provider>
      </section>
    );
  }
}
