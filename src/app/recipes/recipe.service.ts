import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({providedIn: "root"})
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

 private  recipes: Recipe[] = [
    new Recipe('Ven Pongal Recipe', 'A Savor of Tradition, a Taste of Tamil Nadu!',
    'https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-3.jpg'
    ,[
      new Ingredient('Rice', 1),
      new Ingredient('Ghee', 1)
    ]),
    new Recipe('Masala Dosa Recipe', 'A Flavorful Journey through Tamil Nadu!',
    'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D'
    ,[
      new Ingredient('Dosa Mix', 1),
      new Ingredient('Coconut', 1),
      new Ingredient('Dhal', 4)
    ]),
    new Recipe('Poori Recipe', 'A Crispy Delight, Flavor Taking Flight!',
    'https://thumbs.dreamstime.com/b/puri-bhaji-indian-dish-made-up-aloo-38512979.jpg',
    [
      new Ingredient('Wheat Paste', 1),
      new Ingredient('Oil', 1),
      new Ingredient('Channa',1)
    ])
   ];

   constructor(private slService: ShoppingListService){}

   getRecipes(): Recipe[]{
    return this.recipes.slice();
   }

   getRecipe(index : number): Recipe{
      return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]): void{
    this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index : number, newRecipe: Recipe) : void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
   }

   deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
   }

}
