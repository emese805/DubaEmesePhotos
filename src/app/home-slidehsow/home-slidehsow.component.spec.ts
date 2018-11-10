import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlidehsowComponent } from './home-slidehsow.component';

describe('HomeSlidehsowComponent', () => {
  let component: HomeSlidehsowComponent;
  let fixture: ComponentFixture<HomeSlidehsowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlidehsowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlidehsowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
