import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('link', 'zelda',
      'http://vignette2.wikia.nocookie.net/zelda/images/d/d0/Princesse_Zelda_Artwork_TPHD.png/'
      + 'revision/latest?cb=20160214225828&path-prefix=fr', []),
    new Recipe('link', 'zelda',
      'http://vignette4.wikia.nocookie.net/zelda/images/e/e3/Zelda_Baguette_du_Vent_HW.png/' +
      'revision/latest?cb=20150201125215&path-prefix=fr', []),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
