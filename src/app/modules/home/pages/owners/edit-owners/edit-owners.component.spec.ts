import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOwnersComponent } from './edit-owners.component';

describe('EditOwnersComponent', () => {
  let component: EditOwnersComponent;
  let fixture: ComponentFixture<EditOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
