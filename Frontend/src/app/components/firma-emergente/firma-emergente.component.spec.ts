import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaEmergenteComponent } from './firma-emergente.component';

describe('FirmaEmergenteComponent', () => {
  let component: FirmaEmergenteComponent;
  let fixture: ComponentFixture<FirmaEmergenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirmaEmergenteComponent]
    });
    fixture = TestBed.createComponent(FirmaEmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
