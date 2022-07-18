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

  async getRecipes(token) {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(baseURL + '/recipes/', options).then(convertToJson);
    return response;
  }

}  

