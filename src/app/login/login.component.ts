import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { AuthService } from '../Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials : User = {username : "", password : ""};

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    
  }

  Login(): void {
    console.log(this._auth.login(this.credentials));
  }

}
