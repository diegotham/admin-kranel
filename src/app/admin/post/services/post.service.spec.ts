import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { ApiService } from 'src/app/core/api.service';

describe('PostService', () => {
  let postService: PostService;
  let apiService: ApiService;
  let apiGetSpy;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AdminSharedModule]
  }));

  beforeEach(() => {
    postService = TestBed.get(PostService);
    apiService = TestBed.get(ApiService);
    apiGetSpy = spyOn(apiService, 'get').and.callThrough();
  });

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('should call get from apiService when calling posts', () => {
    postService.getPosts();
    expect(apiGetSpy).toHaveBeenCalled();
  });
});
