import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesearchComponent } from './rangesearch.component';

describe('RangesearchComponent', () => {
  let component: RangesearchComponent;
  let fixture: ComponentFixture<RangesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangesearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
