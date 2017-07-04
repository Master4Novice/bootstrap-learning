import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDropComponent } from './bootstrap-drop.component';

describe('BootstrapDropComponent', () => {
  let component: BootstrapDropComponent;
  let fixture: ComponentFixture<BootstrapDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
