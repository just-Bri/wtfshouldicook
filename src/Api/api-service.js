import config from "../config";
// import { url } from "inspector";

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
  getRecipe(answers) {
    var getUrl = new URL(`${config.API_ENDPOINT}/api/recipe`);
    Object.keys(answers).forEach(key =>
      getUrl.searchParams.append(key, answers[key])
    );
    fetch(getUrl)
      .then(response => response.json())
      .then(response => (window.location.href = `/recipes/${response.newId}`));
  }
};

export default ApiService;
