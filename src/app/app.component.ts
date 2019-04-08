import { Component } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

class Note{
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-app';

  note : Note=new Note();
  notes : Array<Note>=[];

  takeNote(note){
  console.log(note.title);
  console.log(note.text);
  this.notes.push(note);
  this.note=new Note();
  }

}
