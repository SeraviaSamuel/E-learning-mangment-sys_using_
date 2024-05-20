import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CourseDetailsService } from '../../services/account/CourseDetails/course-details.service';
import { InstructorService } from '../../services/instructor/instructor.service';
import { CourseContentsComponent } from '../course-contents/course-contents.component';
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CourseContentsComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courseId:any =-1
  courseDetails: any = {};
  instructorName:string=''
  constructor(private route: ActivatedRoute ,private courseService: CourseDetailsService,
    private instructorService:InstructorService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
    
      this.courseId = params['id'];
      this.fetchCourseDetails();
    });
  }
  fetchCourseDetails() {
    this.courseService.getCourseName(this.courseId).subscribe(
      (response: any) => {
        
        this.courseDetails = response;
       this.fetchInstructorName(this.courseDetails.instructorId)
      },
      (error: any) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
  fetchInstructorName(instructorId:number){
this.instructorService.getInstructorById(this.courseDetails.instructorId).subscribe({
  next:((response)=>{
    this.instructorName=response.name
  }),
  error:((err)=>{
    console.log("errrror")
    console.log(err)
  })
})
  }
}


