import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppContext from "./AppContext";
import { QuestionOpening } from "../Questions/QuestionOpening";
import QuestionCuisine from "../Questions/QuestionCuisine";
import QuestionComplex from "../Questions/QuestionComplex";
import Recipe from "../Recipe/Recipe";
import TopBar from "../TopBar/TopBar";
import { Submit } from "../Submit/Submit";
import ApiService from "../Api/api-service";
import "../config";
import Uhoh from "../Uhoh/Uhoh";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      craving: "",
      cuisine: "",
      complex: "",
    };
  }

  updateCraving = (craving) => {
    this.setState({
      craving: craving,
    });
  };
  updateCuisine = (cuisine) => {
    this.setState({
      cuisine: cuisine,
    });
  };
  updateComplex = (complex) => {
    this.setState(
      {
        complex: complex,
      },
      () => this.getRecipe()
    );
  };
  getRecipe = () => {
    ApiService.getRecipe(this.state);
  };

  render() {
    return (
      <section>
        <AppContext.Provider
          value={{
            updateCraving: this.updateCraving,
            updateCuisine: this.updateCuisine,
            updateComplex: this.updateComplex,
            recipeToDisplay: this.state.recipe,
            getRecipe: this.getRecipe,
          }}
        >
          <TopBar />
          <main>
            <Router>
              <Routes>
                <Route exact path="/" render={() => <QuestionOpening />} />
                <Route path="/cuisine" render={() => <QuestionCuisine />} />
                <Route
                  exact
                  path="/complex"
                  render={() => <QuestionComplex />}
                />
                <Route
                  exact
                  path="/recipes/:id"
                  render={(props) => <Recipe {...props} />}
                />
                <Route exact path="/submit" render={() => <Submit />} />
                <Route component={Uhoh} />
              </Routes>
            </Router>
          </main>
        </AppContext.Provider>
      </section>
    );
  }
}
