import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevoirService } from '../../../../core/services/devoir.service';
import { DevoirDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-devoir-form',
    templateUrl: './devoir-form.component.html',
    styleUrls: ['./devoir-form.component.css']
})
export class DevoirFormComponent implements OnInit {
    devoir: DevoirDTO = {
        id: 0,
        titre: '',
        description: '',
        dateDevoir: ''
    };
    isEdit = false;
    loading = false;
    submitted = false;

    constructor(
        private devoirService: DevoirService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        if (id) {
            this.isEdit = true;
            this.loading = true;
            this.devoirService.getById(id).subscribe({
                next: (data) => {
                    this.devoir = data;
                    // Format date for input type="date"
                    if (this.devoir.dateDevoir) {
                        this.devoir.dateDevoir = new Date(this.devoir.dateDevoir).toISOString().split('T')[0];
                    }
                    this.loading = false;
                },
                error: (err) => {
                    console.error('Error loading devoir', err);
                    this.loading = false;
                }
            });
        }
    }

    onSubmit(): void {
        this.submitted = true;
        if (!this.devoir.titre || !this.devoir.dateDevoir) return;

        this.loading = true;
        const observer = {
            next: () => {
                this.loading = false;
                this.router.navigate(['/admin/devoirs']);
            },
            error: (err: any) => {
                console.error('Error saving devoir', err);
                this.loading = false;
            }
        };

        if (this.isEdit) {
            this.devoirService.update(this.devoir.id, this.devoir).subscribe(observer);
        } else {
            // Create copy without ID and ensure date format
            const { id, ...newDevoir } = this.devoir;
            this.devoirService.add(newDevoir as DevoirDTO).subscribe(observer);
        }
    }
}
