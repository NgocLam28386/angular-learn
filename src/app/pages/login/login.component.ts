import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  handleSubmit() {
    // console.log(this.loginForm.controls['email'].errors?.['required']);
    // console.log(this.loginForm.get('email'));
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        // console.log(data);
        localStorage.setItem('token', data.accessToken);
        alert('Success');
        this.router.navigateByUrl('/admin');
      },
      error: (e) => alert('' + e.error),
    });
  }
}
