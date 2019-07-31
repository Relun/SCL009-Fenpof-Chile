import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// RECORDAR CAMBIAR AppComponent POR el 1er componente creado 
import { AppComponent } from './app.component';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';



const routes: Routes = [
  {path:"", component: NavbarFooterComponent}
  // RECORDAR CAMBIAR AppComponent POR el 1er componente creado 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }