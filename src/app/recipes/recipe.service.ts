import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Grilled Cheese Sandwich',
      'A classic. Goes best with tomato soup.',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Grilled_Cheese_Sandwich_%2816938984390%29.jpg',
      [
        new Ingredient('Bread slices', 2),
        new Ingredient('American cheese slices', 1),
        new Ingredient('Butter', 1)
      ]),
    new Recipe(
      'Tomato Soup',
      'Best from a can!',
      'https://cdn.pixabay.com/photo/2017/05/05/22/31/tomato-2288415_1280.jpg',
      [
        new Ingredient('Cans of tomato soup', 2),
        new Ingredient('Water or Milk', 2)
      ])

  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
