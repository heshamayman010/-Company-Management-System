import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepDeleteComponent } from './dep-delete.component';

describe('DepDeleteComponent', () => {
  let component: DepDeleteComponent;
  let fixture: ComponentFixture<DepDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
