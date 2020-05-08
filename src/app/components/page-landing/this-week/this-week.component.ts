import { Component, OnInit } from '@angular/core';
import { DatabaseFBService} from '../../../services/database-fb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-this-week',
  templateUrl: './this-week.component.html',
  styleUrls: ['./this-week.component.css']
})
export class ThisWeekComponent implements OnInit {

weeklyDate$: any [];

  constructor(private db:DatabaseFBService) { }

  ngOnInit(): void {
this.db.dbRetrieveText().subscribe(text=>{
this.weeklyDate$ = text.map((e)=>{
  return{
    id:e.payload.doc.id,
  ...(e.payload.doc.data() as any)  }
})
})
  }

}
