import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeComponent } from './home.component';
import { by } from 'protractor';
import { Driver } from 'selenium-webdriver/safari';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let title = document.getElementsByClassName('title');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          FlexLayoutModule,
          MaterialModule,
          CoreModule,
          SharedModule,
          HttpClientTestingModule
        ],
        declarations: [HomeComponent],
        providers: []
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an h1 title "Find an SSA Office"', () => {
    expect(document.getElementsByClassName('title')).toEqual(title);
  });
});
