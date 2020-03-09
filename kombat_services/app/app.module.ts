import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KombatComponent } from './components/kombat/kombat.component';
import { HeroComponent } from './components/kombat/hero/hero.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/users/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    KombatComponent,
    HeroComponent,
    CommentsComponent,
    UsersComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
