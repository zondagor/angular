import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third/:id', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
