import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartAddComponent } from './depart-add.component';

describe('DepartAddComponent', () => {
  let component: DepartAddComponent;
  let fixture: ComponentFixture<DepartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
