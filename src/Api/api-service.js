import config from "../config";

const WtfApiService = {
  submitRecipe(newRecipe) {
    // console.log(JSON.stringify(newRecipe));
    try {
      return fetch(`${config.API_ENDPOINT}/api/recipe`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
      }).then(res => console.log(res.json()));
    } catch (error) {
      console.log(error);
    }
  }
};

export default WtfApiService;
