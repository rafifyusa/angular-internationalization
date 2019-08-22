import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '@/app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from '@/home/home.component';
import {RegisterComponent} from '@/register/register.component';
import {LoginComponent} from '@/login/login.component';
import {AlertComponent} from '@/_components/alert/alert.component';
import {AlertService} from '@/_services/alert.service';
import {UserService} from '@/_services/user.service';
import {AuthenticationService} from '@/_services/authentication.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        AlertComponent,
      ],
      providers: [AlertService, UserService, AuthenticationService, TranslateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'regist-login'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('regist-login');
  });
});
