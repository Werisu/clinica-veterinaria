import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCpaComponent } from './create-cpa.component';

describe('CreateCpaComponent', () => {
  let component: CreateCpaComponent;
  let fixture: ComponentFixture<CreateCpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
