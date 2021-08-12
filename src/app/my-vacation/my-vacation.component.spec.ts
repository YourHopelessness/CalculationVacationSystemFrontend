import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacationComponent } from './my-vacation.component';

describe('MyVacationComponent', () => {
  let component: MyVacationComponent;
  let fixture: ComponentFixture<MyVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
