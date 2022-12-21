import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersTableComponent } from './owners-table.component';

describe('OwnersTableComponent', () => {
  let component: OwnersTableComponent;
  let fixture: ComponentFixture<OwnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
