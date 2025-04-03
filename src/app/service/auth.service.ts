import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from '../model/auth-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  apiUrl = "http://localhost:5000/api/auth";
  token = "";

  login(credentials: { email: string, password: string }) {
    // Call backend API for login
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  
  signup(data: { username:string, email: string, password: string }) {
    // Call backend API for signup
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getCredential(){
    let loginCredential = JSON.parse(localStorage.getItem('token') as string);
    let {token, user} = loginCredential;
    return {token,user};
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
  
}
