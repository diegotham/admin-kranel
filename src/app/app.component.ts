import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin Kranel';

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) {}

  get currentUser() {
    return this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
