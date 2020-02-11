import { TestBed } from '@angular/core/testing';

import { KeepServiceService } from './keep-service.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AuthenticationService } from 'services/authentication.service';
import { authenticationStub } from './authenticationStub';
import { NgModule } from '@angular/core';
import { Note } from './note';

fdescribe('KeepServiceService', () => {

  let noteService: KeepServiceService;  
  let httpMock: HttpTestingController;

  const dummyNote: Note={id:1,title:'dummy_Note',text:'Dummy_note Text'};

  beforeEach(() =>{
     TestBed.configureTestingModule({
    providers: [KeepServiceService,
      {
      provide: AuthenticationService,
      useClass:authenticationStub  
      }
    ],  
    imports: [HttpClientTestingModule]
  })


  noteService= TestBed.get(KeepServiceService);
  httpMock= TestBed.get(HttpTestingController);

  //mocking a request
  httpMock.expectOne({
    url:'http://localhost:3010/notes',
    method: 'Get'
  })

});

  it('should be created', () => {
    //const service: KeepServiceService = TestBed.get(KeepServiceService);
    expect(noteService).toBeTruthy();
  });

  it('should call the correct API getNotesForSubject and update NotesSubject', () => {
    //calling getNotesForSubject
    noteService.getNotesForSubject();
    
    //mocking a request
    const request=httpMock.expectOne({
      url:'http://localhost:3010/notes',
      method: 'Get'
    })

    //mocking the response
    request.flush([dummyNote]);

    //To check whether notesSubject is getting updated
    noteService.getNotes().subscribe(data=>{
      expect(data).toEqual([dummyNote]);
    })
  });

  it('should call the correct API addNote While adding a note and update NotesSubject', () => {
    const noteToAdd: Note={id:2,title:'dummy_Note_To_Add',text:'Dummy_note_To_Add Text'};

    noteService.postNote(noteToAdd).subscribe(data=>{
      expect(data).toEqual(noteToAdd);
    })

    const postRequest=httpMock.expectOne({
      url: 'http://localhost:3010/notes',
      method: 'POST'
    })

    postRequest.flush(noteToAdd);

    expect(postRequest.request.body).toEqual(noteToAdd);

    noteService.getNotes().subscribe(data=>{
      expect(data).toEqual([noteToAdd]);
    })

  })

  afterEach(()=>{
    httpMock.verify();
  })

});
