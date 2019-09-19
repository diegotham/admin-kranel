import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule]
  }));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
