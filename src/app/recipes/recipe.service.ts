import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Toast', 'Toasted bread', 'https://cdn.pixabay.com/photo/2015/12/05/11/04/bread-1077984_1280.jpg'),
    new Recipe('More Toast', 'Toasted bread', 'https://cdn.pixabay.com/photo/2015/12/05/11/04/bread-1077984_1280.jpg')

  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
