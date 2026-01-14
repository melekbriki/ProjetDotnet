import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Devoir {
  id?: number;           // optional, needed for delete
  titre: string;
  description?: string;
  dateDevoir: string;    // matches C# DateDevoir
}

@Injectable({
  providedIn: 'root'
})
export class DevoirService {

  private apiUrl = 'http://localhost:5180/api/devoirs'; 

  constructor(private http: HttpClient) {}

  // GET all devoirs (Student)
  getAll(): Observable<Devoir[]> {
    return this.http.get<Devoir[]>(this.apiUrl);
  }

  // POST add devoir (Admin)
  add(devoir: Devoir): Observable<any> {
    return this.http.post(this.apiUrl, devoir);
  }

  // DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
