import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNodeComponent } from './gallery-node.component';

describe('GalleryNodeComponent', () => {
  let component: GalleryNodeComponent;
  let fixture: ComponentFixture<GalleryNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
