import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books;
  public authors;

  constructor( private booksService:BooksService ) { }



  private selectBook() {

    this.booksService.getBooks().subscribe(book => {
     this.books=book;
     console.log(this.books);
    });
    
}
private selectAuthor() {

  this.booksService.getAuthors().subscribe(author => {
   this.authors=author;
   console.log(this.authors);
  });
}
}
