import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  ulamForm1: FormGroup;
  ulamForm2: FormGroup;
  text: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ulamForm1 = this.formBuilder.group({
      weekName: [''],
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
    console.log(
      'clear'
    )
    this.ulamForm2.reset();
  }
}
