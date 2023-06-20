import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllviewmoredishesComponent } from './allviewmoredishes.component';

describe('AllviewmoredishesComponent', () => {
  let component: AllviewmoredishesComponent;
  let fixture: ComponentFixture<AllviewmoredishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllviewmoredishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllviewmoredishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
