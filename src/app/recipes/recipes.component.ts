import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
  directives: [RecipeListComponent]
})
export class RecipesComponent  {

}
