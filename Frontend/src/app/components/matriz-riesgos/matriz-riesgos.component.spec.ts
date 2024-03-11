import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizRiesgosComponent } from './matriz-riesgos.component';

describe('MatrizRiesgosComponent', () => {
  let component: MatrizRiesgosComponent;
  let fixture: ComponentFixture<MatrizRiesgosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrizRiesgosComponent]
    });
    fixture = TestBed.createComponent(MatrizRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
