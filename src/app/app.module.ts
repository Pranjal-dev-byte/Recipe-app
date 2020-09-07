import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { headerComponent } from './header/header.component';

import { RecipeComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ShoppingEditComponent } from './shoppingList/shopping-edit/shopping-edit.component';

@NgModule({
	declarations: [
		AppComponent,
		headerComponent,
		RecipeComponent,
		RecipeDetailsComponent,
		RecipeItemComponent,
		RecipeListComponent,
		ShoppingListComponent,
		ShoppingEditComponent
	],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
