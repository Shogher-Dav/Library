import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BooksComponent} from './books/books.component'

import { AppComponent } from './app.component';
import { BooksService } from './books/books.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
