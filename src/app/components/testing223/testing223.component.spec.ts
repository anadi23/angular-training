import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing223Component } from './testing223.component';

describe('Testing223Component', () => {
  let component: Testing223Component;
  let fixture: ComponentFixture<Testing223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testing223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
