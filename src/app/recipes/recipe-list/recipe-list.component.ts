import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Toast', 'Toasted bread', 'https://cdn.pixabay.com/photo/2015/12/05/11/04/bread-1077984_1280.jpg'),
    new Recipe('More Toast', 'Toasted bread', 'https://cdn.pixabay.com/photo/2015/12/05/11/04/bread-1077984_1280.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
