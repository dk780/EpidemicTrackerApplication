import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentRecordComponent } from './add-treatment-record.component';

describe('AddTreatmentRecordComponent', () => {
  let component: AddTreatmentRecordComponent;
  let fixture: ComponentFixture<AddTreatmentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTreatmentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreatmentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
