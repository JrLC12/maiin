import { Injectable } from '@angular/core';
import { user } from '../_models/signindata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {



  private readonly sesToken = new user ('','');
  isAuthenticated = false;

  constructor(private http: HttpClient,) { }

  authenticate(users:user):boolean{
    if(this.checkCredentials(users)){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(users:user):boolean{
    return this.checkEmail(users.getEmail()) && this.checkPass(users.getPassword());
  }

  private checkEmail(email:string):boolean{
    return email === this.sesToken.getEmail();
  }

  private checkPass(password:string):boolean{
    return password === this.sesToken.getPassword();
  }
 
}


