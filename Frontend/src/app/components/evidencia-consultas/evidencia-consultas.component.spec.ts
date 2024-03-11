import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaConsultasComponent } from './evidencia-consultas.component';

describe('EvidenciaConsultasComponent', () => {
  let component: EvidenciaConsultasComponent;
  let fixture: ComponentFixture<EvidenciaConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenciaConsultasComponent]
    });
    fixture = TestBed.createComponent(EvidenciaConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
