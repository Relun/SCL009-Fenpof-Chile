import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';

//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoginComponent } from './components/administrator/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { SupportComponent } from './components/support/support.component';
import { EventsComponent } from './components/events/events.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarFooterComponent,
    LoginComponent,
    AboutComponent,
    InformationComponent,
    OrganizationComponent,
    SupportComponent,
    EventsComponent,
    GaleryComponent,
    PublicPoliticsComponent,
    PostUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

