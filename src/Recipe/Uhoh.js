import React, { Component } from "react";

export default class Uhoh extends Component {
  render() {
    return (
      <>
        <h2>Uh oh</h2>
        <p>There's no recipe here!</p>
        <p>Please click 'Get a Recipe!'</p>
        <p>or 'Submit a Recipe!' above!</p>
      </>
    );
  }
}
