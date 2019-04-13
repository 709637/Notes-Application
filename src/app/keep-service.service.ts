import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Note } from './note';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeepServiceService {

  notesURL:string;
  notex={
    title: "Learn Post",
    text: "Learning post method"
  }

  notes:Array<Note>;

  noteSubject: BehaviorSubject<Array<Note>>;

  constructor(public http: HttpClient) {
    console.log('My service is working');
    this.notesURL="http://localhost:3010/notes";
    this.notes=[];
    this.noteSubject=new BehaviorSubject(this.notes);

    this.getNotesForSubject();
   }

   public getNotes(): Observable<Array<Note>>{
    //return this.http.get<Array<Note>>(this.notesURL);
    console.log("this.noteSubject",this.noteSubject);
    return this.noteSubject;
   }

   //fetching initial set of notes for BehaviorSubject
   public getNotesForSubject(){
     this.http.get<Array<Note>>(this.notesURL).subscribe((data)=>{
       this.notes=data;
       this.noteSubject.next(this.notes);
     });
   }

  //  public postNote(): Observable<Note>{
  //    return this.http.post<Note>(this.notesURL,this.notex);
  //  }

  getNoteById(noteId){
   let note=this.notes.find(note=>note.id===noteId);
   return Object.assign({},note);
  }

  editNote(noteArg){
    return this.http.put<Note>(`${this.notesURL}/${noteArg.id}`,noteArg)
    .do(updatedNote=>{
      let note=this.notes.find(note=>note.id===updatedNote.id);
      Object.assign(note,updatedNote)
      this.noteSubject.next(this.notes);
    });
  }
   
   
   public postNote(postNote): Observable<Note>{
    return this.http.post<Note>(this.notesURL,postNote)
    .do(newNote=>{
      this.notes.push(newNote);
      this.noteSubject.next(this.notes);
    });
  }
}
