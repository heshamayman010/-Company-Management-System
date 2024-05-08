import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptSearchComponent } from './dept-search.component';

describe('DeptSearchComponent', () => {
  let component: DeptSearchComponent;
  let fixture: ComponentFixture<DeptSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
