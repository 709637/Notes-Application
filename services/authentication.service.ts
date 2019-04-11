import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Token } from '@angular/compiler';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

validateUser(user){
  let users=[];
  return this.http.get('http://localhost:3000/auth');
//   .subscribe((data)=>{
//     users.push(data);  
//     console.log(users[0][0]);  
//     let userflag=users[0].filter(usr=>usr.username===user.username);
//     let passflag=users[0].filter(usr=>usr.password===user.password);
//     if(userflag===passflag){
//       return userflag[0].authKey;
//     }
// },
// (err)=>{
//   console.log(err);
// }
//   );
}

setToken(token){
  localStorage.setItem("authToken",token)
}

getToken(){
  return localStorage.getItem('authToken');
}

isUserAuthenticated(token){
  //***************API Code************************************************************************/
  //  return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',{},{
  //     headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
  //   }).map(response=>response['isAuthenticated'])
  //   .toPromise();

    //***************API Code************************************************************************/
    let users=[];
    return this.http.get('http://localhost:3000/auth')
    .map((data)=>{
          users.push(data);  
          let userflag=users[0].filter(usr=>usr.authKey===token);
          if(userflag.length===1){
            return true;
          }})
          .toPromise();
  //   .subscribe((data)=>{
  //     users.push(data);  
  //     let userflag=users[0].filter(usr=>usr.authKey===token);
  //     if(userflag.length===1){
  //       return true;
  //     }
  // },
  // (err)=>{
  //   console.log(err);
  //   return false;
  // });
}

}
