import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> {
        // Expect numeric roles from route configuration
        const expectedRoles = route.data['roles'] as Array<number>;

        return this.authService.getRole().pipe(
            map(role => {
                // Check if role is in expected list
                if (expectedRoles && expectedRoles.includes(role)) {
                    return true;
                }

                // Role not authorized, redirect to login
                this.router.navigate(['/login']);
                return false;
            })
        );
    }
}
