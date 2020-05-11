import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { DatabaseFBService } from '../../services/database-fb.service';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-page-admit-edit-actual-dish',
  templateUrl: './page-admit-edit-actual-dish.component.html',
  styleUrls: ['./page-admit-edit-actual-dish.component.css'],
})
export class PageAdmitEditActualDishComponent implements OnInit {
  dishId: string;
  dishToUpdate$: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DatabaseFBService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    //This is the id from params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dishId = params.get('id');
    });

    //get data by id
    this.dbService.testgetDishByID(this.dishId).subscribe((data) => {
      this.dishToUpdate$ = data.payload.data() as any;
    });

    // this.recipeForm.get('name').setValue(this.indivRecipeToUpdate$.name);
    // this.recipeForm
    // .get('addedBy')
    // .setValue(this.indivRecipeToUpdate$.addedBy);
    // this.recipeForm.get('image').setValue(this.indivRecipeToUpdate$.image);
    // this.recipeForm.get('type').setValue(this.indivRecipeToUpdate$.type);
  }
}
