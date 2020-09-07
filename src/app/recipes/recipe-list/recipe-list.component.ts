import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: [ './recipe-list.component.css' ]
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe(
			'A recipe',
			'I am a test description',
			'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'
		),
		new Recipe(
			'Another recipe',
			'I am a test description',
			'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'
		)
	];
	constructor() {}
	ngOnInit(): void {}
	onRecipeSelect(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe);
	}
}
