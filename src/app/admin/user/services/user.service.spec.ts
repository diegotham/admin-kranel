import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { User } from 'src/app/core/models/user';
import { ApiService } from 'src/app/core/api.service';

describe('UserService', () => {
  let userService: UserService;
  let apiService: ApiService;
  let apiGetSpy;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule]
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    apiService = TestBed.get(ApiService);
    apiGetSpy = spyOn(apiService, 'get').and.callThrough();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should call get from apiService when calling users', () => {
    userService.getUsers();
    expect(apiGetSpy).toHaveBeenCalled();
  });
});
