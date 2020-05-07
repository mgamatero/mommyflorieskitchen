import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PageLandingComponent} from '../app/components/page-landing/page-landing.component';
import{ PageSingleTrayMenuComponent} from '../app/components/page-single-tray-menu/page-single-tray-menu.component';
import{ PageCateringMenuComponent} from '../app/components/page-catering-menu/page-catering-menu.component';
import{ PageNotfoundComponent} from '../app/components/page-notfound/page-notfound.component';


const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "home", component: PageLandingComponent },
  { path: "single-tray-menu", component: PageSingleTrayMenuComponent },
  { path: "catering-menu", component: PageCateringMenuComponent},
  {path: '**',component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
