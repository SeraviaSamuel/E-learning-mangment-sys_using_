import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'http://localhost:5104/api/Course';
  constructor(private http:HttpClient) { }
  getAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }



  
}
