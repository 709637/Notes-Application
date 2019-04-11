import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Note } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeepServiceService {

  notesURL:string;
  notex={
    title: "Learn Post",
    text: "Learning post method"
  }

  constructor(public http: HttpClient) {
    console.log('My service is working');
    this.notesURL="http://localhost:3000/notes";
   }

   public getNotes(): Observable<Array<Note>>{
    return this.http.get<Array<Note>>(this.notesURL);
   }

  //  public postNote(): Observable<Note>{
  //    return this.http.post<Note>(this.notesURL,this.notex);
  //  }
   
   
   public postNote(postNote): Observable<Note>{
    return this.http.post<Note>(this.notesURL,postNote);
  }
}
