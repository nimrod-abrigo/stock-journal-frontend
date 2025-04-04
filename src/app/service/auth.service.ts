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
  user = {};

  login(credentials: { email: string, password: string }) {
    // Call backend API for login
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  
  signup(data: { username:string, email: string, password: string }) {
    // Call backend API for signup
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
  
}
