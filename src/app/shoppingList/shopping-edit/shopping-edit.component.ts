import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput', { static: true })
	nameInput: ElementRef;
	@ViewChild('amtInput', { static: true })
	amtInput: ElementRef;
	@Output() ingredientAdded = new EventEmitter<{ name: string; amount: number }>();
	constructor() {}

	ngOnInit(): void {}
	onAdd() {
		const ingName = this.nameInput.nativeElement.value;
		const ingAmt = this.amtInput.nativeElement.value;
		const newIngredient = new Ingredient(ingName, ingAmt);
		this.ingredientAdded.emit(newIngredient);
	}
}
