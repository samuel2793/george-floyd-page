import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponentComponent } from './photo-component.component';

describe('PhotoComponentComponent', () => {
  let component: PhotoComponentComponent;
  let fixture: ComponentFixture<PhotoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoComponentComponent]
    });
    fixture = TestBed.createComponent(PhotoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
