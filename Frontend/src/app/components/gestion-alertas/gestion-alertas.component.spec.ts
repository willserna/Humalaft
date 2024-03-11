import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAlertasComponent } from './gestion-alertas.component';

describe('GestionAlertasComponent', () => {
  let component: GestionAlertasComponent;
  let fixture: ComponentFixture<GestionAlertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAlertasComponent]
    });
    fixture = TestBed.createComponent(GestionAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
