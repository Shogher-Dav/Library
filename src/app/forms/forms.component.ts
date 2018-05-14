import { Component, OnInit,Input, EventEmitter,Output,ElementRef } from '@angular/core';
import { BooksService } from '../books/books.service';
import {BooksComponent} from '../books/books.component';
import { Book } from '../book.interface';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  @Input() public currentBook:Book;
  @Input() public check:boolean;
  @Input() public books:Array<Book>;
  complete = new EventEmitter();

  resultSet:any; // dont need it 
 

  constructor(private booksService:BooksService, private modalService:ModalService,public elementRef: ElementRef) {}
  public  addBook(){
    if(!this.check){
      this.booksService.add(this.currentBook).subscribe((book)=>{
        this.books.push(book);
      });
      this.currentBook={
        id:null,
        title:"",
        author:"",
        year:null,
        pages:null
    }
    alert("Book is successfully created");
      
    }
    else 
    {
      this.booksService.edit(this.currentBook.id, this.currentBook).subscribe((crtBook)=>{
        
    })
    alert("Book is successfully edit");
    }
  }
  public choseFile($event:any){
      var self = this;
      var file:File = $event.target.files[0];
      var myReader:FileReader = new FileReader();
      
      myReader.readAsText(file);
      console.log(myReader);
      var resultSet = [];
      myReader.onloadend = function(e){
          // you can perform an action with data read here
          // as an example i am just splitting strings by spaces
          var columns = myReader.result.split(/\r\n|\r|\n/g);

          for (var i = 0; i < columns.length; i++) {
              resultSet.push(columns[i].split(' '));
          }

          self.resultSet=resultSet; // probably dont need to do this atall
         
          var x=self.complete.next(self.resultSet);
           // pass along the data which would be used by the parent component
           console.log(x);
      };
  }
  
}
