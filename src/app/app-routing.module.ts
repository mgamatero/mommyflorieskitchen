import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PageLandingComponent} from '../app/components/page-landing/page-landing.component';
import{ PageSingleTrayMenuComponent} from '../app/components/page-single-tray-menu/page-single-tray-menu.component';
import{ PageCateringMenuComponent} from '../app/components/page-catering-menu/page-catering-menu.component';
import{ PageGalleryComponent} from '../app/components/page-gallery/page-gallery.component';
import{ PageContactUsComponent} from '../app/components/page-contact-us/page-contact-us.component';
import{ PageAdminComponent} from '../app/components/page-admin/page-admin.component';
import{ PageAdminEditComponent} from '../app/components/page-admin-edit/page-admin-edit.component';
import{ PageNotfoundComponent} from '../app/components/page-notfound/page-notfound.component';
import{ LoginComponent} from '../app/admin/login/login.component';


const routes: Routes = [
  { path: "", component: PageLandingComponent },
  { path: "home", component: PageLandingComponent },
  { path: "single-tray-menu", component: PageSingleTrayMenuComponent },
  { path: "catering-menu", component: PageCateringMenuComponent},
  { path: "gallery", component: PageGalleryComponent},
  { path: "contact-us", component: PageContactUsComponent},
  { path: "admin-add", component: PageAdminComponent},
  { path: "admin-edit", component: PageAdminEditComponent},
  { path: "admin/login", component: LoginComponent},

  {path: '**',component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
