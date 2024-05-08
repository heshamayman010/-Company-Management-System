import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEntryComponent } from './adding-entry.component';

describe('AddingEntryComponent', () => {
  let component: AddingEntryComponent;
  let fixture: ComponentFixture<AddingEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
