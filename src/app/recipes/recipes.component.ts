import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipes.component.html',
	styleUrls: [ './recipes.component.css' ]
})
export class RecipeComponent implements OnInit {
	recipeSelected: Recipe;
	constructor() {}
	ngOnInit(): void {}
}
