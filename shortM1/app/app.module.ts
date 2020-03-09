import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PowPipe } from './pow.pipe';
import { DirectiveCompComponent } from './components/directive-comp/directive-comp.component';
import { HoverDirective } from './directives/hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { ServicesCompComponent } from './components/services-comp/services-comp.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FormsComponent,
    PipesComponent,
    PowPipe,
    DirectiveCompComponent,
    HoverDirective,
    ServicesCompComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
