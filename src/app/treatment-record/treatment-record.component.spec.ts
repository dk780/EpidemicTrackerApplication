import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentRecordComponent } from './treatment-record.component';

describe('TreatmentRecordComponent', () => {
  let component: TreatmentRecordComponent;
  let fixture: ComponentFixture<TreatmentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
