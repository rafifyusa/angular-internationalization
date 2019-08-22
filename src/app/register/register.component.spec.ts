import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {RegisterComponent} from './register.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '@/app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from '@/home/home.component';
import {LoginComponent} from '@/login/login.component';
import {TranslateCustomLoader} from '@/_helpers/translateCustomLoader';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let translate: TranslateService;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateCustomLoader
        },
      }),
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [RegisterComponent, HomeComponent, LoginComponent],
      providers: [TranslateService]
    })
      .compileComponents();
  }));

  beforeEach(inject([TranslateService], (service) => {
    translate = service;
    translate.use('en');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the Register header in english', async(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Register Page');
  }));
  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });
  it('should call the onSubmit method', () => {
    spyOn(component, 'onSubmit');
    const compiled = fixture.debugElement.nativeElement;
    el = compiled.querySelector('button');
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
  it('form should be invalid', () => {
    /* tslint:disable:no-string-literal */
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['password'].setValue('');
    /* tslint:enable:no-string-literal */
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    /* tslint:disable:no-string-literal */
    component.registerForm.controls['firstName'].setValue('edward');
    component.registerForm.controls['lastName'].setValue('elric');
    component.registerForm.controls['username'].setValue('edward');
    component.registerForm.controls['password'].setValue('password');
    /* tslint:enable:no-string-literal */
    expect(component.registerForm.valid).toBeTruthy();
  });
});
