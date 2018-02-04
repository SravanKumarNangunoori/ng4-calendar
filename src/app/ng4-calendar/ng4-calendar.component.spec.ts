import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4CalendarComponent } from './ng4-calendar.component';

describe('Ng4CalendarComponent', () => {
  let component: Ng4CalendarComponent;
  let fixture: ComponentFixture<Ng4CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4CalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
