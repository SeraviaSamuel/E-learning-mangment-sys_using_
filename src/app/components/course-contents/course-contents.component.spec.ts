import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentsComponent } from './course-contents.component';

describe('CourseContentsComponent', () => {
  let component: CourseContentsComponent;
  let fixture: ComponentFixture<CourseContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
