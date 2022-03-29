import React, { Component } from "react";
import AppContext from "../App/AppContext";

export default class QuestionComplex extends Component {
  static contextType = AppContext;
  render() {
    return (
      <section>
        <label>feeling adventurous?</label>
        <ul>
          <li>
            <a
              href="#foo"
              onClick={() => {
                this.context.updateComplex("yes");
              }}
            >
              yes
            </a>
          </li>
          <li>
            <a
              href="#bar"
              onClick={() => {
                this.context.updateComplex("no");
              }}
            >
              no
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
