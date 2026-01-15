import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LeconDTO } from '../models/api-models';

@Injectable({
    providedIn: 'root'
})
export class LessonService {
    private apiUrl = `${environment.apiUrl}/lecons`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<LeconDTO[]> {
        return this.http.get<LeconDTO[]>(this.apiUrl);
    }

    getByCourseId(courseId: number): Observable<LeconDTO[]> {
        return this.http.get<LeconDTO[]>(`${this.apiUrl}/course/${courseId}`);
    }

    getById(id: number): Observable<LeconDTO> {
        return this.http.get<LeconDTO>(`${this.apiUrl}/${id}`);
    }

    add(lesson: LeconDTO): Observable<any> {
        return this.http.post(this.apiUrl, lesson);
    }

    update(id: number, lesson: LeconDTO): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, lesson);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
