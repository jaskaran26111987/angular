import { Component, OnInit } from '@angular/core';

/* We are import module from repcipes foler and use it as `recipes: Repice[] = [];` Now recipes accept object only */
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // Using Model Recipe In recipe foler file rcipe.module.ts //
  recipes: Recipe[] = [
    new Recipe('Bargar','Bargar King','https://www.jagranimages.com/inext/burger_p_13112013.jpg'),
    new Recipe('Pizza','Pizza King','https://www.skinnytaste.com/wp-content/uploads/2018/02/breakfast-pizza-1-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

