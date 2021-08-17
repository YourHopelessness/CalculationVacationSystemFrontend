import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
     
    constructor(private http: HttpClient, private router: Router) {
    }
      
    login(credentials : User) {
        return this.http.post('/api/Login/Authentificate', credentials)
        .subscribe((resp: any) => {
     
            this.router.navigate(['profile']);
            localStorage.setItem('auth_token', resp.token);
            
        });
    }

    logout() {
        localStorage.removeItem('auth_token');
    }
     
    public get logIn(): boolean {
        return (localStorage.getItem('auth_token') !== null);
    }
}
   