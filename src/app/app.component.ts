import { Component, OnInit } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KeepServiceService } from './keep-service.service';
import { Observable, from } from 'rxjs';
import {Note} from './note';



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
    
  }

  



}
