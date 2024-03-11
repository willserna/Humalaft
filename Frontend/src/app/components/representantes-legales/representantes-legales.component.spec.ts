import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesLegalesComponent } from './representantes-legales.component';

describe('RepresentantesLegalesComponent', () => {
  let component: RepresentantesLegalesComponent;
  let fixture: ComponentFixture<RepresentantesLegalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentantesLegalesComponent]
    });
    fixture = TestBed.createComponent(RepresentantesLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
