import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsearchComponent } from './groupsearch.component';

describe('GroupsearchComponent', () => {
  let component: GroupsearchComponent;
  let fixture: ComponentFixture<GroupsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
