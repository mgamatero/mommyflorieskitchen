import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import{DatabaseFBService} from '../../services/database-fb.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  // ulamTextForm: FormGroup;
  ulamForm: FormGroup;
  // text: any;
  constructor(private formBuilder: FormBuilder, private dbService:DatabaseFBService) {}

  ngOnInit(): void {

    // this.ulamTextForm = this.formBuilder.group({
    //   ulamDate:['']
    // })

    this.ulamForm = this.formBuilder.group({
      ulamName: [''],
      ulamImage: [''],
      ulamPrice: [''],
      ulamSize: [''],
    });
     }

  clearForms(){
    this.ulamForm.reset();
  }

  addFromForm(){
    this.dbService.addUlam(this.ulamForm.value);
    this.ulamForm.reset();
  }
}
