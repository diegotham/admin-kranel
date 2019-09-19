import { TestBed } from '@angular/core/testing';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/core/data-storage.service';
import { ApiService } from 'src/app/core/api.service';

const mockUser = {
      id: 1,
      name: 'Emily',
      username: 'emily',
      email: 'emily@adminkranel.com',
      posts: 1,
      isAdmin: true
};

describe('AuthService', () => {
  let apiService: ApiService;
  let dataStorageService: DataStorageService;
  let authService: AuthenticationService;
  let apiGetSpy;
  let dataRemoveSpy;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule],
  }));

  beforeEach(() => {
    apiService = TestBed.get(ApiService);
    dataStorageService = TestBed.get(DataStorageService);
    authService = TestBed.get(AuthenticationService);
    apiGetSpy = spyOn(apiService, 'get').and.callThrough();
    dataRemoveSpy = spyOn(dataStorageService, 'remove').and.callThrough();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should call get from apiService when logging in with good credentials', () => {
    authService.login(mockUser.email, 'hola');
    expect(apiGetSpy).toHaveBeenCalled();
  });

  it('should not call get from apiService when logging in with wrong credentials', () => {
    authService.login(mockUser.email, 'fake');
    expect(apiGetSpy).not.toHaveBeenCalled();
  });

  it('should remove user from data storage when logging out', () => {
    authService.logout();
    expect(dataRemoveSpy).toHaveBeenCalled();
  });
});
