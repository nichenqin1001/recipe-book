import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('link', 'zelda',
    'http://piq.codeus.net/static/media/forum_pictures/Link_(Spirit_Tracks)_2_2517.png');

  constructor() { }

  ngOnInit() {
  }

}
