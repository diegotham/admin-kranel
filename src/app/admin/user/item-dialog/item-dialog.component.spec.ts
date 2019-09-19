import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemDialogComponent } from './item-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';

describe('UserItemDialogComponent', () => {
  let component: UserItemDialogComponent;
  let fixture: ComponentFixture<UserItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemDialogComponent ],
      imports: [AdminSharedModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
