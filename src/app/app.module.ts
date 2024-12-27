import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFotosComponent } from './views/lista-fotos/lista-fotos.component';
import { PhotoComponentComponent } from './shared/photo-component/photo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFotosComponent,
    PhotoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
