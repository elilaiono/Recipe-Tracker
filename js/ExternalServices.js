const baseURL = 'team-2-recipetracker.herokuapp.com/';

// https://team-2-recipetracker.herokuapp.com/login LOGIN MENU
// https://team-2-recipetracker.herokuapp.com/logout LOGOUT MENU

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export default class ExternalServices  {
  constructor() {

  }
  getData(category) {
    // instead we will pass the category we want in here when we need it.
    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }
  async findProductById(id) {
    //const products = await this.getData()
    //return products.find((item) => item.Id === id);
    // the API allows us to pull products directly from it by ID...so we can change this method as well to take advantage of that.
    return await fetch(baseURL + `product/${id}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }


  async submit(recipe) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    };
    return await fetch(baseURL + 'recipes/add', options).then(convertToJson);
  }


  async loginRequest(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    const response = await fetch(baseURL + 'login', options).then(convertToJson);
    return response.accessToken;
  }
  // make a request to the server for the current orders
  // requires: a valid token
  // returns: a list of orders
  async getRecipes(token) {
    const options = {
      method: 'GET',
      // the server will reject our request if we don't include the Authorization header with a valid token!
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(baseURL + '/recipes/', options).then(convertToJson);
    return response;
  }

}  

