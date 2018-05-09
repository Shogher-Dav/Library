import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient}   from '@angular/common/http';


// export interface Books {
//   name:string
//   id:number
// }


@Injectable()
export class BooksService {

 

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable <any> {
    return this.httpClient.get('http://localhost:3001/books');
  }
  getAuthors():Observable <any> {
    return this.httpClient.get('http://localhost:3001/authors')
  }

}
