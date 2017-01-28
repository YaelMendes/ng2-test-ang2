import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserItemComponent} from "./user-item.component";
import {CounterComponent} from "./counter.component";
import {DemoFormSku} from "./story-add-form.component";

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    CounterComponent,
    DemoFormSku
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
