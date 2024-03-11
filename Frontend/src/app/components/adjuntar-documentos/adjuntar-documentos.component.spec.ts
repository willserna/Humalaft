import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntarDocumentosComponent } from './adjuntar-documentos.component';

describe('AdjuntarDocumentosComponent', () => {
  let component: AdjuntarDocumentosComponent;
  let fixture: ComponentFixture<AdjuntarDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjuntarDocumentosComponent]
    });
    fixture = TestBed.createComponent(AdjuntarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
