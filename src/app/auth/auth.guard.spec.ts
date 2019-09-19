import { TestBed } from '@angular/core/testing';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

class MockAuthenticationService {
    currentUserValue = {
      id: 1,
      name: 'Emily',
      username: 'emily',
      email: 'emily@adminkranel.com',
      posts: 1,
      isAdmin: true
    };
}

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: MockAuthenticationService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule, RouterTestingModule],
    providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
    ]
  }));

  beforeEach(() => {
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthenticationService);
  });

  it('should return true for a logged in user', () => {
    expect(authGuard.canActivate()).toEqual(true);
  });

  it('should return false when there is no user', () => {
    authService.currentUserValue = null;
    expect(authGuard.canActivate()).toEqual(false);
  });

  it('should return false when user is not admin', () => {
    authService.currentUserValue.isAdmin = false;
    expect(authGuard.canActivate()).toEqual(false);
  });

});
