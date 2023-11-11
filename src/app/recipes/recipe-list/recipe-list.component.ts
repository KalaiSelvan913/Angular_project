import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Ven Pongal Recipe', 'This is simply a Pongal',
    'https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-3.jpg'),
    new Recipe('A Dosa Recipe', 'This is simply a Dosa',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w4DlNVS6Teb19NFJr50q-aQFPZpjbHadBg&usqp=CAU')
   ];

  constructor(){}

  ngOnInit(): void {

  }


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
