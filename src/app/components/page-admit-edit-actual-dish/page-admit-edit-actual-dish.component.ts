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

//PageAdmitEditActualDishComponent - page that actually edits ulam.  Pull data from fb, and able to write back on edit
export class PageAdmitEditActualDishComponent implements OnInit {
  dishId: string;
  dishToUpdate$: any;
  soldOut:boolean;
  editUlamForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DatabaseFBService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    //form
    this.editUlamForm = this.fb.group({
      ulamName: [''],
      ulamImage: [''],
      ulamPrice: [''],
      ulamSize: [''],
      soldOut:['']
    });

    //This is the id from params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dishId = params.get('id');
    });

    //get data by id and assign to form
    this.dbService.getDishByID(this.dishId).subscribe((data) => {
      this.dishToUpdate$ = data.payload.data() as any;
      this.editUlamForm.get('ulamName').setValue(this.dishToUpdate$.ulamName);
      this.editUlamForm.get('ulamPrice').setValue(this.dishToUpdate$.ulamPrice);
      this.editUlamForm.get('ulamImage').setValue(this.dishToUpdate$.ulamImage);
      this.editUlamForm.get('ulamSize').setValue(this.dishToUpdate$.ulamSize);
      this.editUlamForm.get('soldOut').setValue(this.dishToUpdate$.soldOut);

      console.log('Constructor ---> ' +  this.editUlamForm.get('soldOut').value )
    });
  }

  clickSoldOut(){
    // this.dishToUpdate$.sold = 'true';
    this.editUlamForm.get('soldOut').setValue(true);
    console.log('sold out ---> ' +  this.editUlamForm.get('soldOut').value )
    // this.soldOut = this.editUlamForm.get('soldOut').value
  }

  clickNotSoldOut(){
    // this.dishToUpdate$.sold ='false';
    this.editUlamForm.get('soldOut').setValue(false);
    console.log('sold out ---> ' +  this.editUlamForm.get('soldOut').value )
    // this.soldOut = this.editUlamForm.get('soldOut').value
  }


  editDish() {
    this.dbService.updateDish(this.editUlamForm.value,this.dishId);
    this.editUlamForm.reset();
    this.router.navigate(['admin-edit/'])
  }
}
