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


// PageAdminComponent -- Used to Add new Ulams for thisweek section.  Writes data to Firebase
export class PageAdminComponent implements OnInit {

  ulamForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dbService:DatabaseFBService) {}

  ngOnInit(): void {

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
