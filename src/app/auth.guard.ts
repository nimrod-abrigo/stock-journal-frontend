import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const isLoggedIn = !localStorage.getItem("token")? false: true;
    // const isLoggedIn = this.authService.token;
    if (isLoggedIn) {
      return true; // Allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login
      return false; // Block access
    }
  }
}