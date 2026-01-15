import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterDto } from '../../../core/models/api-models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup;
    loading = false;
    error = '';
    success = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            nomUser: ['', [Validators.required, Validators.minLength(3)]],
            emailUser: ['', [Validators.required, Validators.email]],
            motDePasse: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit(): void {
        if (this.registerForm.invalid) return;

        this.loading = true;
        this.error = '';

        const registerDto: RegisterDto = this.registerForm.value;
        this.authService.register(registerDto).subscribe({
            next: () => {
                this.loading = false;
                this.success = true;
                setTimeout(() => this.router.navigate(['/login']), 2000);
            },
            error: (err) => {
                this.error = err.error?.message || 'Registration failed. Please try again.';
                this.loading = false;
            }
        });
    }
}
