import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
class MockAuthenticationService {
  currentUserValue = {
    id: 1,
    name: 'Emily',
    username: 'emily',
    email: 'emily@adminkranel.com',
    posts: 1,
    isAdmin: true
  };
}

describe('AppComponent', () => {
  let authService: MockAuthenticationService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        AdminSharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Admin Kranel'`, () => {
    expect(component.title).toEqual('Admin Kranel');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Admin Kranel');
  });

  it('should render Code Test in the toolbar if user is not logged in', () => {
    authService.currentUserValue = null;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar .text-right').textContent).toContain('Code Test');
  });

  it('should render Logout in the toolbar if user is logged in', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar .text-right').textContent).toContain('Logout');
  });
});
