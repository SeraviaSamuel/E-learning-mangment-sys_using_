import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  private apiUrl = 'http://localhost:5104/api/Course/ByCourseId/';
  constructor(private http:HttpClient) { }
  getCourseName(courseId: any): Observable<any> {
    const url = `${this.apiUrl}${courseId}`;
    return this.http.get(url);
  }
}
