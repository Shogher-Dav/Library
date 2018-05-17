import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { BooksService } from '../books/books.service';
import { BooksComponent } from '../books/books.component';
import { Book } from '../book';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  @Input() public currentBook: Book;
  @Input() public checkForModal: boolean;
  @Input() public books: Array<Book>;
  constructor(private booksService: BooksService, 
        	  private modalService: ModalService ) {}
        
  public bookRequests() {
    if (!this.checkForModal) {
        this.booksService.add(this.currentBook).subscribe((book) => {
        	 this.books.push(book);
      });
      this.currentBook=new Book();
      alert("Book is successfully created");

    }
    else {
	  this.booksService.edit(this.currentBook.id, this.currentBook).subscribe((crtBook) => {});
	  alert("Book is successfully edited");
	}
	
  }
  public addImageName(event){
	this.currentBook.img = event.target.files[0].name;
  }


}
