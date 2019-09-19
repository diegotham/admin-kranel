import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemDialogComponent } from './item-dialog.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('PostItemDialogComponent', () => {
  let component: PostItemDialogComponent;
  let fixture: ComponentFixture<PostItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItemDialogComponent ],
      imports: [AdminSharedModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator if no post is present', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.loading-indicator')).toBeTruthy();
  });
});
