import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@/app-routing.module';
import {HomeComponent} from '@/home/home.component';
import {LoginComponent} from '@/login/login.component';
import {RegisterComponent} from '@/register/register.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '@/app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

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
      declarations: [AlertComponent, HomeComponent, LoginComponent, RegisterComponent],
      providers: [TranslateService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
