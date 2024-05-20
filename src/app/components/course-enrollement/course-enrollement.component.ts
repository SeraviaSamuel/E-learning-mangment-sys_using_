import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import {CourseContentsComponent} from '../course-contents/course-contents.component'


@Component({
  selector: 'app-course-enrollement',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CourseContentsComponent],
  templateUrl: './course-enrollement.component.html',
  styleUrl: './course-enrollement.component.css'
})
export class CourseEnrollementComponent {
  contentURL: string | null = null;
  openCounter:number=0;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    
    this.openCounter++;
    
    console.log("parammmm", this.contentURL)
      console.log("counter",this.openCounter)
      if(this.openCounter>0){
        this.route.params.subscribe(params => {
          this.contentURL=params['id']|| null
          console.log( "URLLLL",this.contentURL)
        });
      }
  }
}
