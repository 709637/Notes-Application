import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent
  },{
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
