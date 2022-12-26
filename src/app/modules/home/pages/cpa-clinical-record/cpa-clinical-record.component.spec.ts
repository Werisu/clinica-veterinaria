import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaClinicalRecordComponent } from './cpa-clinical-record.component';

describe('CpaClinicalRecordComponent', () => {
  let component: CpaClinicalRecordComponent;
  let fixture: ComponentFixture<CpaClinicalRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpaClinicalRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpaClinicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
