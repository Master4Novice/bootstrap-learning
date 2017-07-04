import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapButtonComponent } from './bootstrap-button.component';

describe('BootstrapButtonComponent', () => {
  let component: BootstrapButtonComponent;
  let fixture: ComponentFixture<BootstrapButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
