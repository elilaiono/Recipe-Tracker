export default class RecipeDetails {
    constructor(recipeID, dataSource){
      this.recipeID = recipeID;
      this.recipe = {};
      this.dataSource = dataSource;
      
    }
  
    async init() {
      this.recipe = await this.dataSource.findProductById(this.recipeID);
      document.querySelector('main').innerHTML = this.renderRecipeDetails();
     
    }
  
    renderRecipeDetails() {
      return `<section class="recipe-detail"> <h3>${this.recipe.Name}</h3>
      <h2 class="divider">${this.recipe.Name}</h2>
      <img
        class="divider"
        src="${this.recipe.Image}"
        alt="${this.recipe.AltDescription}"
      />
      <p class="recipe-ingredients">$${this.recipe.Ingredients}</p>
      <p class="recipe-time">${this.recipe.Time}</p>
      <p class="recipe-serving">${this.recipe.Serving}</p>
      <p class="recipe-instructions">${this.recipe.Instructions}</p>
      <p class="recipe-rating">${this.recipe.Rating}</p>
      <p class="recipe-save">${this.recipe.Save}</p>
      <p class="recipe-backstory">${this.recipe.Backstory}</p>
      <p class="recipe-book">${this.recipe.Book}</p>
      <p class="recipe-creator">${this.recipe.Creator}</p>
      </section>`;
    }
  
  }