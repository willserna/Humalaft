import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionComponent } from './visualizacion.component';

describe('VirtualizacionComponent', () => {
  let component: VisualizacionComponent;
  let fixture: ComponentFixture<VisualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacionComponent]
    });
    fixture = TestBed.createComponent(VisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
