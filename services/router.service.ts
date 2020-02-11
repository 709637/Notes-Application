import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AppRoutingModule} from '../src/app/app-routing.module';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  todashboard() {
    this.route.navigate(['dashboard']);
  }

  testWithExtraParam() {  //you con call this methos through this.routerService.testWithExtraParam(); and url will be   http://localhost:4200/dashboard/a/jdrfhgskjl
    this.route.navigate(['dashboard',"a","jdrfhgskjl"]);
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
