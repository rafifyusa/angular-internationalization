import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from '@/home/home.component';
import {RegisterComponent} from '@/register/register.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TranslateCustomLoader} from '@/_helpers/translateCustomLoader';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateCustomLoader
        }
      }),
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent, HomeComponent, RegisterComponent],
      providers: [TranslateService]
    }).compileComponents();
  }));

  beforeEach(inject([TranslateService], (service) => {
    translate = service;
    translate.use('en');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the Login header in english', async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Login Page');
  }));
});
