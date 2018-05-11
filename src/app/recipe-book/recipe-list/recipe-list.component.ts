import { Component, OnInit } from '@angular/core';

//IMPORT RECIPE DATA MODEL
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','Only a test recipe','https://c.pxhere.com/photos/fa/d4/eat_vegetables_food_kohl_nutrition_onions_healthy_meatless-424515.jpg!d')
  ];
  constructor() { }

  ngOnInit() {
  }

}
