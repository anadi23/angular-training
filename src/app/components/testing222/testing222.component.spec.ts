import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing222Component } from './testing222.component';

describe('Testing222Component', () => {
  let component: Testing222Component;
  let fixture: ComponentFixture<Testing222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testing222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
