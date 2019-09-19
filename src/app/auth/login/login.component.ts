import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  isLoggingIn$: Observable<boolean>;

  constructor(
    protected formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggingIn$ = this.authService.isLoggingIn$;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onLogin(value: { email: string, password: string; }): Promise<User | void> {
    return await this.authService.login(value.email, value.password)
      .then(() => this.router.navigate(['admin', 'users']))
      .catch(e => this.error = e);
  }

}
