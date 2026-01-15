import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Inscription } from '../models/api-models';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService {
    private apiUrl = `${environment.apiUrl}/inscriptions`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Inscription[]> {
        return this.http.get<Inscription[]>(this.apiUrl);
    }

    getByUserId(userId: number): Observable<Inscription[]> {
        return this.http.get<Inscription[]>(`${this.apiUrl}/user/${userId}`);
    }

    enroll(userId: number, courseId: number): Observable<any> {
        const inscription = {
            DateInscription: new Date().toISOString(),
            UserId: userId,
            CoursId: courseId
        };
        return this.http.post(this.apiUrl, inscription);
    }

    unsubscribe(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
