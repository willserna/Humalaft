import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarActorComponent } from './agregar-actor.component';

describe('AgregarActorComponent', () => {
  let component: AgregarActorComponent;
  let fixture: ComponentFixture<AgregarActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarActorComponent]
    });
    fixture = TestBed.createComponent(AgregarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
