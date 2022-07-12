import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugueteListComponent } from './components/juguete-list/juguete-list.component';
import { JugueteComponent } from './components/juguete/juguete.component';

const routes: Routes = [

  { path: '', component:JugueteListComponent },
  { path: 'juguete/:id', component: JugueteComponent },
  { path: '**', component: JugueteListComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
