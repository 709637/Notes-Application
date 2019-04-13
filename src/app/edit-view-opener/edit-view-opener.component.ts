import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import {EditViewComponent} from '../edit-view/edit-view.component';
import {ActivatedRoute} from '@angular/router';
import {RouterService} from 'services/router.service';

@Component({
  selector: 'app-edit-view-opener',
  templateUrl: './edit-view-opener.component.html',
  styleUrls: ['./edit-view-opener.component.css']
})
export class EditViewOpenerComponent implements OnInit {

  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute, private routerService: RouterService) {

    const noteid= +this.activatedRoute.snapshot.paramMap.get('noteid');
    
    this.matDialog.open(EditViewComponent, {
      data:{
        noteID:noteid
      }
    })
    .afterClosed().subscribe(()=>{
      this.routerService.tolastroute();
    });
  }

  ngOnInit() {
  }

}
