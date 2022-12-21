import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnersComponent } from './create-owners.component';

describe('CreateOwnersComponent', () => {
  let component: CreateOwnersComponent;
  let fixture: ComponentFixture<CreateOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
