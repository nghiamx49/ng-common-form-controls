import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormControlsComponent } from './common-form-controls.component';

describe('CommonFormControlsComponent', () => {
  let component: CommonFormControlsComponent;
  let fixture: ComponentFixture<CommonFormControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFormControlsComponent]
    });
    fixture = TestBed.createComponent(CommonFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
