import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHomeComponent } from './ui-home.component';

describe('UiHomeComponent', () => {
  let component: UiHomeComponent;
  let fixture: ComponentFixture<UiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
