import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEmergenteComponent } from './pantalla-emergente.component';

describe('PantallaEmergenteComponent', () => {
  let component: PantallaEmergenteComponent;
  let fixture: ComponentFixture<PantallaEmergenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaEmergenteComponent]
    });
    fixture = TestBed.createComponent(PantallaEmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
