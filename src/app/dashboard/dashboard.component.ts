import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userInfo:any;

  constructor(private authService: AuthService){
    //this.userInfo = this.authService.user;
    this.userInfo = JSON.parse(localStorage.getItem('user') as string);
  }
  
  ngOnInit(): void {
    
  }
  
  logout (){
    this.authService.logout();
  }
}
