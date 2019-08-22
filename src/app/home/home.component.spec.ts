import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '@/app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from '@/login/login.component';
import {RegisterComponent} from '@/register/register.component';
import {User} from '@/_models/user';
import {TranslateCustomLoader} from '@/_helpers/translateCustomLoader';
import {AuthenticationService} from '@/_services/authentication.service';
import {AuthenticationServiceMock} from '@/_services/authenticationmock.service';
import {UserService} from '@/_services/user.service';
import {UserServiceMock} from '@/_services/usermock.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateCustomLoader,
          deps: [HttpClient]
        }
      }),
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [HomeComponent, LoginComponent, RegisterComponent],
      providers: [TranslateService,
        {provide: AuthenticationService, useClass: AuthenticationServiceMock},
        {provide: UserService, useClass: UserServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([TranslateService], (service) => {
    translate = service;
    translate.use('en');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('test the component', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should load the Home header in english', async(() => {
      fixture = TestBed.createComponent(HomeComponent);

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Hi Budi');
    }));
    it('should load the Home header in indonesian', async(() => {
      translate.use('id');
      fixture = TestBed.createComponent(HomeComponent);

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Halo Budi');
    }));
    it('should load the delete button in german', async(() => {
      translate.use('de');
      fixture = TestBed.createComponent(HomeComponent);

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a').textContent).toContain('löschen');
    }));
  });

  describe('test the data', () => {
    it('current user is not null', () => {
      expect(Object.keys(component.currentUser)).toContain('firstName');
      expect(Object.keys(component.currentUser)).toContain('lastName');
      expect(Object.keys(component.currentUser)).toContain('username');
    });
    it('should have 1 user in list', () => {
      expect(component.users.length).toEqual(1);
    });
  });
});
