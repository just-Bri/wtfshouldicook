import config from "../config";

const WtfApiService = {
  submitRecipe(newRecipe) {
    console.log(newRecipe);
    return fetch(`${config.API_ENDPOINT}/api/recipe`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
        // authorization: not used for now
      },
      body: JSON.stringify({
        newRecipe
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default WtfApiService;
