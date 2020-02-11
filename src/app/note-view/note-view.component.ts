import { Component, OnInit, Input } from '@angular/core';

import {Note} from '../note';
import { KeepServiceService } from '../keep-service.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor(private keepServiceService: KeepServiceService) { }
  


  notes: Array<Note> = [];

  ngOnInit() {
    let notes = this.keepServiceService.getNotes().subscribe(
      (data) => {
        console.log(data);
        return this.notes = data;
      },
      error => console.log(error),
    );
    console.log(notes);

    //or*****
    // this.notess$ =this.keepService.getNotes();
  }

}
