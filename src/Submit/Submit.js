import React, { useContext, useState } from "react";
import ApiService from "../Api/api-service";

export const Submit = () => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("british");
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [complex, setComplex] = useState("no");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const addIngredientField = () => {
    setIngredients({
      ingredients: [...ingredients, { name: "", amount: "" }],
    });
  };
  const removeIngredientField = (e, val) => {
    e.preventDefault();
    let ings = Array.from(ingredients);
    let blah = ings.filter((item) => item !== val);
    setIngredients(...blah);
  };

  const addInstructionField = () => {
    setInstructions({
      instructions: [...instructions, { instructions: "" }],
    });
  };
  const removeInstructionField = (e, val) => {
    e.preventDefault();
    let ings = Array.from(instructions);
    let blah = ings.filter((item) => item !== val);
    setInstructions(...blah);
  };

  const handleInstrChange = (e) => {
    let instrc = [...instructions];
    instrc[e.target.name].instructions = e.target.value;
    setInstructions({ instructions: instrc });
  };

  const handleIngChange = (e, piece) => {
    let ings = [...ingredients];
    if (piece === "name") {
      ings[e.target.name].name = e.target.value;
    } else if (piece === "amount") {
      ings[e.target.name].amount = e.target.value;
    }
    setIngredients({ ingredients: ings });
  };

  const renderInstrInputs = () => {
    return instructions.map((val, idx) => {
      let instrcId = `ing-${idx}`;
      return (
        <section key={idx}>
          <label htmlFor={instrcId}>{`Step #${idx + 1}`}</label>
          <textarea
            name={`${idx}`}
            value={val.instructions}
            onChange={(e) => handleInstrChange(e)}
            required
          />
          <button onClick={(e) => removeInstructionField(e, val)}>
            remove
          </button>
        </section>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredients.length < 2) {
      alert("Please add more ingredients");
    } else if (instructions.length < 2) {
      alert("Please add more instructions");
    } else {
      ApiService.submitRecipe({
        name,
        cuisine,
        prepTime,
        cookTime,
        complex,
        ingredients,
        instructions,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit.bind(this)}>
      <fieldset>
        <legend>submit a new recipe</legend>
        <fieldset>
          <section>
            <label>name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </section>
          <section>
            <label>cuisine:</label>
            <select name="cuisine" onChange={(e) => setCuisine(e.target.value)}>
              <option value="american">american</option>
              <option value="british">british</option>
              <option value="chinese">chinese</option>
              <option value="indian">indian</option>
              <option value="italian">italian</option>
              <option value="mexican">mexican</option>
            </select>
          </section>
          <section>
            <label>prep time:</label>
            <input
              type="number"
              onChange={(e) => setPrepTime(e.target.value)}
              name="prepTime"
              placeholder="in minutes"
              required
            />
          </section>
          <section>
            <label>cook time:</label>
            <input
              type="number"
              onChange={(e) => setCookTime(e.target.value)}
              name="cookTime"
              placeholder="in minutes"
              required
            />
          </section>

          <section>
            <label>is it complex?</label>
            <select name="complex" onChange={(e) => setComplex(e.target.value)}>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
          </section>
        </fieldset>
        <fieldset>
          <legend>ingredients</legend>
          <button onClick={addIngredientField()}>add ingredient</button>
          {ingredients?.map((val, idx) => {
            let ingId = `ing-${idx}`,
              amountId = `amount-${idx}`;
            return (
              <section key={idx}>
                <label htmlFor={ingId}>{`Ingredient #${idx + 1}`}</label>
                <input
                  type="text"
                  name={`${idx}`}
                  value={val.name}
                  onChange={(e) => handleIngChange(e, "name")}
                  required
                />
                <label htmlFor={amountId}>{`Amount #${idx + 1}`}</label>
                <input
                  type="text"
                  value={val.amount}
                  name={`${idx}`}
                  onChange={(e) => handleIngChange(e, "amount")}
                  required
                />
                <button onClick={(e) => removeIngredientField(e, val)}>
                  remove
                </button>
              </section>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>instructions</legend>
          <button onClick={addInstructionField}>add instruction</button>
          {renderInstrInputs()}
        </fieldset>
      </fieldset>
      <button type="submit">submit</button>
    </form>
  );
};
