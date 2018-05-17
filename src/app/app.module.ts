import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component'

import { AppComponent } from './app.component';
import { BooksService } from './books/books.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { FormsComponent } from './forms/forms.component';
import { FormsModule} from '@angular/forms'
import { Book } from './book';
import { BookContainerComponent } from './book-container/book-container.component'


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ModalComponent,
    FormsComponent,
    BookContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [
    BooksService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
