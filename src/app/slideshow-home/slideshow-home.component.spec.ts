import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowHomeComponent } from './slideshow-home.component';

describe('SlideshowHomeComponent', () => {
  let component: SlideshowHomeComponent;
  let fixture: ComponentFixture<SlideshowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
