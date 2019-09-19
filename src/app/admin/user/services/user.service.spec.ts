import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
