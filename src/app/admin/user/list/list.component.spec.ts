import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './list.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { UserItemDialogComponent } from 'src/app/admin/user/item-dialog/item-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, UserItemDialogComponent ],
      imports: [ AdminSharedModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
