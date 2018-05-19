import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { ModalService } from '../modal/modal.service';
import { Book } from '../book';
@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Array<Book> = [];
  public checkForModal: boolean = false;
  public currentBook:Book;
  public id;
  constructor(private booksService: BooksService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((book: Array<Book>) => {
      this.books = book;

    });
  }
  public openModal(id?: number): void {
    this.modalService.open();
    if (arguments.length !== 0) {
      this.currentBook = this.books[id - 1];
      this.checkForModal = true;
    }
    else {
      this.currentBook=new Book();
      this.checkForModal = false;
    }
    this.id=id;
  }
  public deleteBook(book: Book) {
    this.booksService.delete(book).subscribe((data) => {
      this.books = this.books.filter(c => c.id !== book.id)
    });

  }
}