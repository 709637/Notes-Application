import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AppRoutingModule} from '../src/app/app-routing.module';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: Router, private location: Location) { }

  todashboard() {
    this.route.navigate(['dashboard']);
  }

  tologin() {
    this.route.navigate(['login']);
  }

  totakenote(){
    this.route.navigate(['takenote']);
  }

  toeditnote(noteid){
    this.route.navigate(['dashboard',{
      outlets:{
        noteEditOutlet:['note',noteid,'edit']
      }
    }]);
    
  }

  tolastroute(){
    this.location.back();
  }
  
}
