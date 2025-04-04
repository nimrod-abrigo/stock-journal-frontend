import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = "http://localhost:5000/api/transactions/portfolio";
  constructor(private http: HttpClient, private auth: AuthService) {}


  getPortfolio(){
    //let token = this.auth.token;
    let token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders({
      'x-auth-token': token
    });

    return this.http.get(`${this.apiUrl}`, { headers })
  }
}
