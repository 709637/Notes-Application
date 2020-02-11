import { Component, OnInit,Inject } from '@angular/core';

import {Note} from '../note';

import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

import {KeepServiceService} from '../keep-service.service';



@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  note:Note;
  constructor(private dialogRef:MatDialogRef<EditViewComponent>,
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private keepServiceService: KeepServiceService) { }

  ngOnInit() {
    this.note=this.keepServiceService.getNoteById(this.Data.noteID);
  }

  editNote(){
  this.keepServiceService.editNote(this.note).subscribe((data)=>{
    this.dialogRef.close();
  });
  }

}
