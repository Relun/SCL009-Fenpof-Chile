import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/administrator/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { GaleryComponent } from './components/galery/galery.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';
import { SupportComponent } from './components/support/support.component';








const routes: Routes = [
  // en path vacio "" por mientras se carga contenido de about // considerar home 
  {path:"", component:AboutComponent },
  {path:"about", component: AboutComponent},
  {path:"administrator/login", component: LoginComponent},
  {path:"administrator/post", component: PostUserComponent},
  {path:"events", component: EventsComponent},
  {path:"galery", component: GaleryComponent},
  {path:"information", component: InformationComponent},
  {path:"organization", component: OrganizationComponent},
  {path:"public", component: PublicPoliticsComponent},
  {path:"support", component: SupportComponent}
];











@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }