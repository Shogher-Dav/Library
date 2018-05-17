import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient}   from '@angular/common/http';
import { BooksComponent } from './books.component';
import { HttpHeaders } from '@angular/common/http';
import { Book } from '../book';


@Injectable()
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable <any> {
    return this.httpClient.get('http://localhost:3001/books');
  }
 
  public add(book:Book):Observable<any>{
   return this.httpClient.post('http://localhost:3001/books',book);

  }  
  public edit(id:number, book:Book):Observable<any>{
    return this.httpClient.put(`http://localhost:3001/books/${id}`,book);
  }
  public delete(book:Book):Observable<any>{
    return this.httpClient.delete(`http://localhost:3001/books/${book.id}`)
  }

  

}
