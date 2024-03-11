import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDropdownComponent } from './logout-dropdown.component';

describe('LogoutDropdownComponent', () => {
  let component: LogoutDropdownComponent;
  let fixture: ComponentFixture<LogoutDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutDropdownComponent]
    });
    fixture = TestBed.createComponent(LogoutDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
