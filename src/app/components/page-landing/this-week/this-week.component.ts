import { Component, OnInit } from '@angular/core';
import { DatabaseFBService } from '../../../services/database-fb.service';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css'],
})

// ThisWeekComponent pulls data from Firebase and displays Ulam and WeeklyText
export class ThisWeekComponent implements OnInit {
  weeklyDate$: any;
  ulam$: any[];


  constructor(private db: DatabaseFBService) {}

  ngOnInit(): void {

      this.db.retrieveWeekDateText().subscribe((text) => {
      this.weeklyDate$ = text.payload.data();

      //Keep this codeblock, useful for later
      // this.weeklyDate$ = text.map((e)=>{
      //   return{
      //     id:e.payload.doc.id,
      //   ...(e.payload.doc.data() as any)  }
      //    })
    });

    this.db.retrieveUlam().subscribe((ulam) => {
      this.ulam$ = ulam.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        } as any;
      });
    });
  }
}
