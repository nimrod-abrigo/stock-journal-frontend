import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PortfolioItem {
  stockSymbol: string;
  name: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  totalCost:number;
  marketValue: number;
  capitalGainAmount: number;
  capitalGainPercentage: string;
  totalDiv: number;
}

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  userInfo:any;
  result: any;
  dataSource:any;
  displayedColumns: string[] = ['stockSymbol', 'name', 'shares', 'avgPrice','currentPrice','totalCost','marketValue','capitalGainAmount','capitalGainPercentage','totalDiv'];

  constructor(private authService: AuthService, private router: Router, private dashboardService: DashboardService){
    //this.userInfo = this.authService.user;
    this.userInfo = JSON.parse(localStorage.getItem('user') as string);
  }

  ngOnInit(): void {
    this.dashboardService.getPortfolio().subscribe((result)=>{
      this.result = result;
      this.dataSource = new MatTableDataSource(result as PortfolioItem[]);
    });
  }
}
