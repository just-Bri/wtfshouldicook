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
        body: JSON.stringify(newRecipe)
      }).then(res => {
        return res;
      }); //this is the submitted recipe's id
    } catch (error) {
      console.log(error);
    }
  }
};

export default ApiService;
