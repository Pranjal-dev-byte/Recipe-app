import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-list',
	templateUrl: './shoppingList.component.html',
	styleUrls: []
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [ new Ingredient('Apple', 2), new Ingredient('Tomatoes', 12) ];
	constructor() {}

	ngOnInit(): void {}
}
