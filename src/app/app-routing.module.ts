import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiPreviewComponent } from './components/contatti-preview/contatti-preview.component';
import { ContattiDetailComponent } from './components/contatti-detail/contatti-detail.component';
import { AddContattoComponent } from './components/add-contatto/add-contatto.component';

const routes: Routes = [
  { path: '', redirectTo: '/contatti', pathMatch: 'full' },
  { path: 'contatti', component: ContattiPreviewComponent },
  { path: 'contatti/:id', component: ContattiDetailComponent },
  { path: 'add-contatto', component: AddContattoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
