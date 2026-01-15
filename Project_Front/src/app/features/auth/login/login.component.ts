import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginDto } from '../../../core/models/api-models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginDto: LoginDto = {
        emailUser: '',
        motDePasse: ''
    };
    loading = false;
    error = '';
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/student/dashboard';
    }

    onSubmit(): void {
        this.loading = true;
        this.error = '';
        this.authService.login(this.loginDto).subscribe({
            next: (response) => {
                // Fetch role to know where to redirect
                this.authService.getRole().subscribe(role => {
                    // Force numeric comparison
                    const numericRole = Number(role);
                    if (numericRole === 3) {
                        this.router.navigate(['/admin/dashboard']);
                    } else {
                        // Any other role goes to student dashboard
                        this.router.navigate(['/student/dashboard']);
                    }
                });
            },
            error: (err: any) => {
                this.error = err.error?.message || 'Invalid email or password';
                this.loading = false;
            }
        });
    }
}
