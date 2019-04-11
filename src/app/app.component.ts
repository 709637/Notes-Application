import { Component, OnInit } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KeepServiceService } from './keep-service.service';
import { Observable } from 'rxjs';

export class Note {
  title: string;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'keep-app';

  note: Note = new Note();
  notes: Array<Note> = [];
  notess$: Observable<Array<Note>>;

  takeNote(note) {
    console.log(note.title);
    console.log(note.text);
    this.notes.push(note);
    this.note = new Note();
  }

  constructor(public keepService: KeepServiceService) {

  }

  ngOnInit() {
    let notes = this.keepService.getNotes().subscribe(
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

  takeaNote(note) {    
    this.keepService.postNote(note).subscribe(
      (data) => {
        console.log(data);
        this.notes.push(data);
        this.note = new Note();
      },
      error => console.log(error),
    );
  }



}
