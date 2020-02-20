import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//servicios
import{ EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NoRouterComponent } from './no-router/no-router.component';

const routes: Routes=[
  {path: "contacto", component: ContactoComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "ngif", component: NgIfComponent},
  {path: "", component: InicioComponent, pathMatch:"full"},
  {path: "**", component: NoRouterComponent, pathMatch:"full"},
  {path: "**", redirectTo:"NoRouter",  pathMatch:"full"},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    Cuerpo2Component,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    NgIfComponent,
    NoRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
