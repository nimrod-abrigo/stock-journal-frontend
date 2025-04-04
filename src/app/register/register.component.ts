import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: String = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.errorMessage = "";
    if (this.registerForm.valid) {
      this.authService.signup(this.registerForm.value).subscribe(
        (response) => {
          localStorage.setItem('token', JSON.stringify(response));
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = error.msg;
          console.error('Register failed', error);
        }
      );
    }
  }
}
