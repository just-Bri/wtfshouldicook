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
        });
    } catch (error) {
      console.log(error);
    }
  }
};

export default ApiService;
