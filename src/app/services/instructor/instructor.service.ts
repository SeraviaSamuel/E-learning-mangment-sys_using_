import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private apiUrl = 'http://localhost:5104/api/Instructor/';
  constructor(private http:HttpClient) { }
  getInstructorById(instructorId: any): Observable<any> {
    const url = `${this.apiUrl}${instructorId}`;
    return this.http.get(url);
  }
}
