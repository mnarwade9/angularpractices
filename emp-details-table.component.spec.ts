import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsTableComponent } from './emp-details-table.component';

describe('EmpDetailsTableComponent', () => {
  let component: EmpDetailsTableComponent;
  let fixture: ComponentFixture<EmpDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
