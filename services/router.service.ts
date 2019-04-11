import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AppRoutingModule} from '../src/app/app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: Router) { }

  todashboard() {
    this.route.navigate(['dashboard']);
  }

  tologin() {
    this.route.navigate(['login']);
  }

  
}
