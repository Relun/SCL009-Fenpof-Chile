import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/administrator/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { GaleryComponent } from './components/galery/galery.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';
import { SupportComponent } from './components/support/support.component';


import { RegisterComponent } from './components/administrator/register/register.component';

import { AdminComponent } from './components/admin/admin.component';
import { ImageListComponent } from './components/administrator/images/image-list/image-list.component';
import { ImageComponent } from './components/administrator/images/image/image.component';



const routes: Routes = [
  // en path vacio "" por mientras se carga contenido de about // considerar home 
  { path: "", component: AboutComponent },
  { path: "about", component: AboutComponent },

  { path: "administrator/login", component: LoginComponent },

  { path: "administrator/post", component: PostUserComponent },
  { path: "events", component: EventsComponent },
  { path: "galery", component: ImageListComponent },
  { path: "information", component: InformationComponent },
  { path: "organization", component: OrganizationComponent },
  { path: "public", component: PublicPoliticsComponent },
  { path: "support", component: SupportComponent },

  { path: "admin", component: AdminComponent },

  { path: "administrator/register", component: RegisterComponent },

  { path: "administrator/admin", component: AdminComponent },

 /* { path: "image", component: ImagenesComponent},*/
  { path: "image/upload", component: ImageComponent },
  { path: "image/list", component: ImageListComponent }



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }