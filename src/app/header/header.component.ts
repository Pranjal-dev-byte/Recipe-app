import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: []
})
export class headerComponent {
	@Output() navSelected = new EventEmitter<string>();
	recipeNav(value) {
		this.navSelected.emit(value);
	}
	listNav(value) {
		this.navSelected.emit(value);
	}
}
