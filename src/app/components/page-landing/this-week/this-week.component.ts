import { Component, OnInit } from '@angular/core';
import { DatabaseFBService } from '../../../services/database-fb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css'],
})
export class ThisWeekComponent implements OnInit {
  // weeklyDate$: any [];
  weeklyDate$: any;
  ulam1$: any;
  ulam2$: any;

  constructor(private db: DatabaseFBService) {}

  ngOnInit(): void {
    this.db.retrieveWeekDateText().subscribe((text) => {

      console.log(text.payload.data())
      this.weeklyDate$ = text.payload.data()


      // this.weeklyDate$ = text.map((e)=>{
      //   return{
      //     id:e.payload.doc.id,
      //   ...(e.payload.doc.data() as any)  }
      //    })
    });

    this.db.retrieveUlam('ulam1').subscribe((ulam)=>{
      this.ulam1$ = ulam.payload.data()
    })
    this.db.retrieveUlam('ulam2').subscribe((ulam)=>{
      this.ulam2$ = ulam.payload.data()
    })
  }
}
