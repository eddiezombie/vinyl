import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { ListenComponent } from './components/listen/listen.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListenComponent,
    CardComponent,
    ListComponent,
    SingleComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
