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

  constructor(private authService: AuthService, private router: Router, private dashboardService: DashboardService){}

  ngOnInit(): void {
    this.dashboardService.getPortfolio().subscribe((result)=>{
      console.log(result);
    });
  }
  
  logout (){
    this.authService.logout();
  }
}
