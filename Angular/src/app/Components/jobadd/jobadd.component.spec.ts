import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobaddComponent } from './jobadd.component';

describe('JobaddComponent', () => {
  let component: JobaddComponent;
  let fixture: ComponentFixture<JobaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
