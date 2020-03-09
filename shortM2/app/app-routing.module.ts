import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HomeFirstComponent } from './components/home-first/home-first.component';
import { HomeSecondComponent } from './components/home-second/home-second.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'first', component: HomeFirstComponent},
    {path: 'second', component: HomeSecondComponent}
  ]},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
