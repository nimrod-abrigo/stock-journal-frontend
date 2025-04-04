import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  result:any;
  userInfo:any;

  constructor(private authService: AuthService, private router: Router, private dashboardService: DashboardService){
    //this.userInfo = this.authService.user;
    this.userInfo = JSON.parse(localStorage.getItem('user') as string);
  }
  
  ngOnInit(): void {
    this.dashboardService.getPortfolio().subscribe((result)=>{
      this.result = result;
    });
  }
  
  logout (){
    this.authService.logout();
  }
}
