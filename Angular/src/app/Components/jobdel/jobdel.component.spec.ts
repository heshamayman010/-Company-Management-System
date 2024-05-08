import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdelComponent } from './jobdel.component';

describe('JobdelComponent', () => {
  let component: JobdelComponent;
  let fixture: ComponentFixture<JobdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobdelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
