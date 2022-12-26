import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaTableComponent } from './cpa-table.component';

describe('CpaTableComponent', () => {
  let component: CpaTableComponent;
  let fixture: ComponentFixture<CpaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
