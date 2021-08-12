import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextYearComponent } from './next-year.component';

describe('NextYearComponent', () => {
  let component: NextYearComponent;
  let fixture: ComponentFixture<NextYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
