import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PostListComponent } from 'src/app/admin/post/list/list.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent, PostListComponent ],
      imports: [
        AdminSharedModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator if posts$ is not present', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.loading-indicator')).toBeTruthy();
  });
});
