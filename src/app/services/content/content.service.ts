import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:5104/api/Content/course/';

  constructor(private http: HttpClient) {}

  getContentByCourseId(courseId: any): Observable<any> {
    const url = `${this.apiUrl}${courseId}`;
    return this.http.get(url);
  }
}

