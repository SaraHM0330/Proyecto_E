import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaropassComponent } from './faropass.component';

describe('FaropassComponent', () => {
  let component: FaropassComponent;
  let fixture: ComponentFixture<FaropassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaropassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaropassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
