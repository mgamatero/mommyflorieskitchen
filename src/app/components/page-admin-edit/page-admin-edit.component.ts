import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DatabaseFBService } from '../../services/database-fb.service';

@Component({
  selector: 'app-page-admin-edit',
  templateUrl: './page-admin-edit.component.html',
  styleUrls: ['./page-admin-edit.component.css'],
})
export class PageAdminEditComponent implements OnInit {
  ulamTextForm: FormGroup;
  text: any;
  weeklyDate$:any;
  ulam$: any [];

  constructor(
    private formBuilder: FormBuilder,
    private dbService: DatabaseFBService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.ulamTextForm = this.formBuilder.group({
      ulamDate: [''],
    });

    this.dbService.retrieveWeekDateText().subscribe((text) => {
      console.log(text.payload.data());
      this.weeklyDate$ = text.payload.data();

      // this.weeklyDate$ = text.map((e)=>{
      //   return{
      //     id:e.payload.doc.id,
      //   ...(e.payload.doc.data() as any)  }
      //    })
    });

    this.dbService.testretrieveUlam().subscribe((ulam) => {
           this.ulam$ = ulam.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        } as any;
      });
      console.log('ulam' ,this.ulam$)
    });








  }

  updateDate() {
    this.dbService.addText(this.ulamTextForm.value);
  }

  confirmDelete(ulam){
    if(confirm(`Are you sure you want to delete ${ulam.ulamName}?`)){
      this.dbService.testdeleteUlam(ulam)
    }
  }

  editDish(id){
    console.log(id)
    this.router.navigate(['/admin-edit/edit-actual-dish',id])
  }


}
