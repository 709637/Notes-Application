import { Component, OnInit } from '@angular/core';


import { KeepServiceService } from '../keep-service.service';
import { Observable } from 'rxjs';
import {Note} from '../note';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.css']
})
export class TakeNoteComponent implements OnInit {

  constructor(private keepServiceService: KeepServiceService) { }
  
  note: Note = new Note();
  notes: Array<Note> = [];

  ngOnInit() {
   
  }


  takeaNote(note) {    
    this.keepServiceService.postNote(note).subscribe(
      (data) => {
        console.log(data);
        this.notes.push(data);
        this.note = new Note();
      },
      error => console.log(error),
    );
  }
}
