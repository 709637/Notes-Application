import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateGuard } from './can-activate.guard';
import {TakeNoteComponent} from './take-note/take-note.component';
import {NoteViewComponent} from './note-view/note-view.component';

const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent
  },{
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [CanActivateGuard],
    children:[
      {
        path:'view/note-view',
        component:NoteViewComponent
      },
      {
        path:'',
        redirectTo:'view/note-view',
        pathMatch:'full'
      }
    ]
  },{
    path:'takenote',
    component:TakeNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
