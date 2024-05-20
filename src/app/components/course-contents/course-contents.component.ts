import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-course-contents',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive], 
  templateUrl: './course-contents.component.html',
  styleUrls: ['./course-contents.component.css']
})
export class CourseContentsComponent implements OnInit {
  courseId: any = -1;
  courseContent: any[] = []; 

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      console.log('Course ID:', this.courseId); // Log course ID
      this.fetchCourseDetails(this.courseId);
    });
  }

  fetchCourseDetails(id: number) {
    console.log('Fetching details for course ID:', id); // Log fetching details
    this.contentService.getContentByCourseId(id).subscribe(
      (response: any) => {
        this.courseContent = response;
        console.log('Course contenttttttttttt:', response); // Log course content
      },
      (error: any) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
}
