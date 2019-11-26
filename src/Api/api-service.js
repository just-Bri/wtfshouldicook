import config from "../config";

const ApiService = {
  submitRecipe(newRecipe) {
    try {
      fetch(`${config.API_ENDPOINT}/api/recipe`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe),
        redirect: "follow"
      })
        .then(response => response.json())
        .then(response => {
          window.location.href = `${response.redirectTo}`;
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.log(error);
    }
  },
  getRecipeDetails(id) {
    return fetch(`${config.API_ENDPOINT}/api/recipe/${id}`)
      .then(response => {
        return response.json();
      })
      .then(recipe => recipe);
  },
  getRecipeIngredients(id) {
    return fetch(`${config.API_ENDPOINT}/api/ingredient/${id}`)
      .then(response => {
        return response.json();
      })
      .then(ingredients => ingredients);
  },
  getRecipeInstructions(id) {
    return fetch(`${config.API_ENDPOINT}/api/instruction/${id}`)
      .then(response => {
        return response.json();
      })
      .then(instructions => instructions);
  },
  getRecipe(answers) {
    var getUrl = new URL(`${config.API_ENDPOINT}/api/recipe`);
    Object.keys(answers).forEach(key =>
      getUrl.searchParams.append(key, answers[key])
    );
    fetch(getUrl)
      .then(response => response.json())
      .then(response =>
        response.newId
          ? (window.location.href = `/recipes/${response.newId}`)
          : (window.location.href = "/recipe/uhoh")
      );
  }
};

export default ApiService;
