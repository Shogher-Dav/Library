import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';
import { ModalService } from '../modal/modal.service';
import {Book} from '../book.interface';
@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books:Array<Book>=[];
  public check:boolean=false;
  public currentBook:Book={
          id:null,
          title:"",
          author:"",
          year:null,
          pages:null
  };
 constructor( private booksService:BooksService, private modalService:ModalService ) { }

 ngOnInit(): void {
  this.booksService.getBooks().subscribe((book:Array<Book>) => {
    this.books=book;
   
   });
}
 public openModal(id?:number):void{
    this.modalService.open();
    if(arguments.length!==0){
        this.currentBook=this.books[id-1];
        this.check=true;
    }
    else {
        this.currentBook={
            id:null,
            title:"",
            author:"",
            year:null,
            pages:null
        }
        this.check=false;
    }
  }
  public deleteBook(book:Book) {
    this.booksService.delete(book).subscribe((data)=>{
      this.books=this.books.filter(c=>c.id!==book.id)
   });
 
}
}