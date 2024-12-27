import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFotosComponent } from './views/lista-fotos/lista-fotos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'fotos', component: ListaFotosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
