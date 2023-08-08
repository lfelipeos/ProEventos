/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PelestrantesComponent } from './palestrantes.component';

describe('PelestrantesComponent', () => {
  let component: PelestrantesComponent;
  let fixture: ComponentFixture<PelestrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelestrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelestrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
