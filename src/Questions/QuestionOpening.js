import React from "react";
import { Link } from "react-router-dom";

export const QuestionOpening = () => {
  return (
    <>
      <section>
        <h3>answer a few simple questions and get a recipe</h3>
        <label>craving a certain cuisine?</label>
        <ul>
          <li>
            <Link to="/cuisine">yes</Link>
          </li>
          <li>
            <Link to="/complex">no</Link>
          </li>
        </ul>
      </section>
    </>
  );
};
