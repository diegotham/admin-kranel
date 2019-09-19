import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate() {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.isAdmin) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
