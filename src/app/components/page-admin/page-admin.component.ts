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
  ulamTextForm: FormGroup;
  ulamForm1: FormGroup;
  ulamForm2: FormGroup;
  text: any;
  constructor(private formBuilder: FormBuilder, private dbService:DatabaseFBService) {}

  ngOnInit(): void {

    this.ulamTextForm = this.formBuilder.group({
      ulamDate:['']
    })

    this.ulamForm1 = this.formBuilder.group({
      ulamName: [''],
      ulamImage: [''],
      ulamPrice: [''],
      ulamSize: [''],
    });

    this.ulamForm2 = this.formBuilder.group({
      ulamName: [''],
      ulamImage: [''],
      ulamPrice: [''],
      ulamSize: [''],
    });
  }

  clearForms(){
    this.ulamForm1.reset();
    this.ulamForm2.reset();
  }

  addFromForm(){
    this.dbService.addUlam(this.ulamForm1.value,'ulam1');
    this.dbService.addUlam(this.ulamForm2.value,'ulam2');
    this.dbService.addText(this.ulamTextForm.value);
  }
}
