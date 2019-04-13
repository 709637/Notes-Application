import { Component, OnInit,Input } from '@angular/core';

import {RouterService} from 'services/router.service';

import {Note} from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private routerService: RouterService) { }
  
  @Input()
  note:Note;

  ngOnInit() {
  }

  editNote(){
    this.routerService.toeditnote(this.note.id);
  }

}
