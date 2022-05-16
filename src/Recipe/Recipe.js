import React, { useEffect, useState } from "react";
import ApiService from "../Api/api-service";
import { Uhoh } from '../Uhoh/Uhoh';
import { useParams } from "react-router-dom";

export const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [done, setDone] = useState("no");
  const { id } = useParams();

  useEffect(() => {

    ApiService.getAll(id)
      .then((response) => {
        setRecipeDetails(response[0]);
        setRecipeIngredients(response[1]);
        setRecipeInstructions(response[2]);
        setDone("yes");
      })
      .catch((e) => console.log("Promise.all e", e));
  })

  const RecDetails = () => recipeDetails?.map((item, i) => {
    return (
      <ul key={i}>
        <li>name: {item.name}</li>
        <li>cuisine: {item.cuisine}</li>
        <li>complex: {item.complex === false ? "nope" : "yep"}</li>
        <li>prep time: {item.prep_time}</li>
        <li>cook time: {item.cook_time}</li>
      </ul>
    );
  });

  const RecIngs = () => recipeIngredients?.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  const RecInstr = () => recipeInstructions?.map((item, i) => {
    return (
      <React.Fragment key={i}>
        <li>
          Step {i + 1}: {item.instructions}
        </li>
      </React.Fragment>
    );
  });

  if (!done) {
    return <Uhoh />;
  }

  return (
    <section>
      {RecDetails()}
      <section>
        <h3>INGREDIENTS</h3>
        <table>
          <tbody>
            <tr>
              <td>ITEM</td>
              <td>AMOUNT</td>
            </tr>
            {RecIngs()}
          </tbody>
        </table>
      </section>
      <section>
        <h3>INSTRUCTIONS</h3>
        <ul>{RecInstr()}</ul>
      </section>
    </section>
  )
}