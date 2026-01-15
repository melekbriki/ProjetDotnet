import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DevoirDTO } from '../models/api-models';

@Injectable({
    providedIn: 'root'
})
export class DevoirService {

    private apiUrl = `${environment.apiUrl}/devoirs`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<DevoirDTO[]> {
        return this.http.get<DevoirDTO[]>(this.apiUrl);
    }

    getById(id: number): Observable<DevoirDTO> {
        return this.http.get<DevoirDTO>(`${this.apiUrl}/${id}`);
    }

    add(devoir: DevoirDTO): Observable<any> {
        return this.http.post(this.apiUrl, devoir);
    }

    update(id: number, devoir: DevoirDTO): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, devoir);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
