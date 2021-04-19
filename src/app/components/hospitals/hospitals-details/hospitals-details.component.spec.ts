import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsDetailsComponent } from './hospitals-details.component';

describe('HospitalsDetailsComponent', () => {
  let component: HospitalsDetailsComponent;
  let fixture: ComponentFixture<HospitalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
