import { Component, Input, Output, ViewChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from '../books/books.service';
import { BooksComponent } from '../books/books.component';
import { Book } from '../book';
import { ModalService } from '../modal/modal.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements  OnChanges{

	
  @Input() public currentBook: Book;
  @Input() public checkForModal: boolean;
  @Input() public books: Array<Book>;
  @Input() public id;
  @ViewChild('bookForm') form:NgForm;
  public bookForm: FormGroup;
ngOnChanges(changes: SimpleChanges): void {
	this.bookForm=new FormGroup({
		title:new FormControl("", Validators.required),
		author:new FormControl("",Validators.required),
		year:new FormControl("",Validators.required),
		pages:new FormControl("",Validators.required)
		
	})
}

  constructor(private booksService: BooksService, 
			  private modalService: ModalService, ) {}
			
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
  public canselAction(form){
//  form.reset();
  console.log(form);
  }
  
}
