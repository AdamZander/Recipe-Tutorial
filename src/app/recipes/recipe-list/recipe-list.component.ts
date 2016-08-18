import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzGgqe7C7NAyx8_JrgKnH7BAFiTl2envx6mmLMvLpm8YhyVON8A' );

  constructor() { }

  ngOnInit() {
  }

}
