import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  private payloadData: any;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private toaster: ToastService
  ) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    });
  }

  validateControl(input: string) {
    return this.loginForm.get(input)?.invalid &&
      ((this.loginForm.get(input)?.touched) ||
        (this.loginForm.get(input)?.dirty))
  }

  validateControlError(input: string, errorType: string) {
    return this.loginForm.get(input)?.hasError(errorType) &&
      ((this.loginForm.get(input)?.touched) ||
        (this.loginForm.get(input)?.dirty));
  }

  logIn() {
    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const loginData = this.loginForm.value;
    this.loginService.login(loginData.Email, loginData.Password).subscribe({
      next: (response) => {
        console.log('POST request successful:', response);

        this.toaster.success("Login Successful")
        this.auth.storeToken(response.token);


        this.router.navigate(['dashboard']);

      },
      error: (err) => {
        console.error('Error occurred during POST request:', err);
        this.toaster.error("Something wrong")
      }
    });
  }

  logOut() {
    this.auth.logout();
  }
}
