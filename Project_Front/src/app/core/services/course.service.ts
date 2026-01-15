import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoursDTO } from '../models/api-models';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private apiUrl = `${environment.apiUrl}/cours`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<CoursDTO[]> {
        return this.http.get<CoursDTO[]>(this.apiUrl);
    }

    getById(id: number): Observable<CoursDTO> {
        return this.http.get<CoursDTO>(`${this.apiUrl}/${id}`);
    }

    add(course: CoursDTO): Observable<any> {
        return this.http.post(this.apiUrl, course);
    }

    update(id: number, course: CoursDTO): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, course);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
