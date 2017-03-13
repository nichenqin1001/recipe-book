import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('link', 'zelda',
      'http://vignette2.wikia.nocookie.net/zelda/images/d/d0/Princesse_Zelda_Artwork_TPHD.png/revision/latest?cb=20160214225828&path-prefix=fr', []),
    new Recipe('link', 'zelda',
      'http://vignette4.wikia.nocookie.net/zelda/images/e/e3/Zelda_Baguette_du_Vent_HW.png/revision/latest?cb=20150201125215&path-prefix=fr', []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
