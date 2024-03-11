import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasBancariasComponent } from './referencias-bancarias.component';

describe('ReferenciasBancariasComponent', () => {
  let component: ReferenciasBancariasComponent;
  let fixture: ComponentFixture<ReferenciasBancariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciasBancariasComponent]
    });
    fixture = TestBed.createComponent(ReferenciasBancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
