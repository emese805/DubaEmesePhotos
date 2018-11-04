import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerResponsiveComponent } from './galler-responsive.component';

describe('GallerResponsiveComponent', () => {
  let component: GallerResponsiveComponent;
  let fixture: ComponentFixture<GallerResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
