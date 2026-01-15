import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto, RegisterDto, AuthResponse, User } from '../models/api-models';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private currentUserSubject = new BehaviorSubject<AuthResponse | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient, private router: Router) {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUserSubject.next(JSON.parse(savedUser));
        }
    }

    public get currentUserValue(): AuthResponse | null {
        return this.currentUserSubject.value;
    }

    login(dto: LoginDto): Observable<AuthResponse> {
        // Ensure backend receives PascalCase properties to avoid binding errors
        const payload = {
            EmailUser: dto.emailUser,
            MotDePasse: dto.motDePasse
        };
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload).pipe(
            tap(response => {
                // Store user details including role
                // If backend returns role in 'Role' or 'role', normalize it
                const role = response.role || (response as any).Role || 'STUDENT';

                // Store normalized role separately for easy access
                localStorage.setItem('userRole', role.toUpperCase());

                // Store user object
                const userToSave = { ...response, role: role.toUpperCase() };
                localStorage.setItem('currentUser', JSON.stringify(userToSave));

                this.currentUserSubject.next(userToSave);
            })
        );
    }

    register(dto: RegisterDto): Observable<any> {
        const payload = {
            NomUser: dto.nomUser,
            EmailUser: dto.emailUser,
            MotDePasse: dto.motDePasse
        };
        return this.http.post(`${this.apiUrl}/register`, payload);
    }

    logout() {
        localStorage.clear();
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return !!this.currentUserValue;
    }

    // Get role from local storage directly as NUMBER
    getRole(): Observable<number> {
        const role = localStorage.getItem('userRole');
        return of(role ? Number(role) : 0);
    }

    // Check if current user is Admin (Role 3)
    isAdmin(): boolean {
        const role = localStorage.getItem('userRole');
        return role === '3';
    }
}
