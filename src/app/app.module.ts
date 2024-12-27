import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFotosComponent } from './views/lista-fotos/lista-fotos.component';
import { PhotoComponentComponent } from './shared/photo-component/photo-component.component';
import { HomeComponentComponent } from './views/home-component/home-component.component';
import { NavbarComponentComponent } from './shared/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFotosComponent,
    PhotoComponentComponent,
    HomeComponentComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
