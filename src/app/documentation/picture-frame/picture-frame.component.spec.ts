import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFrameComponent } from './picture-frame.component';

describe('PictureFrameComponent', () => {
  let component: PictureFrameComponent;
  let fixture: ComponentFixture<PictureFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
