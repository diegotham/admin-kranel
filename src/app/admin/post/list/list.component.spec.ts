import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './list.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { PostItemDialogComponent } from 'src/app/admin/post/item-dialog/item-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent, PostItemDialogComponent ],
      imports: [AdminSharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
