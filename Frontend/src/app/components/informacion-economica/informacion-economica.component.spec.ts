import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionEconomicaComponent } from './informacion-economica.component';

describe('InformacionEconomicaComponent', () => {
  let component: InformacionEconomicaComponent;
  let fixture: ComponentFixture<InformacionEconomicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionEconomicaComponent]
    });
    fixture = TestBed.createComponent(InformacionEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
