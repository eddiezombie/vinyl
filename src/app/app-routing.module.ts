import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ListenComponent } from './components/listen/listen.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  { path: '', component: ListenComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'card', component: CardComponent },
  { path: 'list', component: ListComponent },
  { path: 'single', component: SingleComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/*', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
