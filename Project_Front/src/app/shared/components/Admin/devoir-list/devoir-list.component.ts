import { Component, OnInit } from '@angular/core';
import { DevoirService } from '../../../../core/services/devoir.service';
import { DevoirDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-devoir-list',
    templateUrl: './devoir-list.component.html',
    styleUrls: ['./devoir-list.component.css']
})
export class DevoirListComponent implements OnInit {
    devoirs: DevoirDTO[] = [];
    loading = true;

    constructor(private devoirService: DevoirService) { }

    ngOnInit(): void {
        this.loadDevoirs();
    }

    loadDevoirs(): void {
        this.loading = true;
        this.devoirService.getAll().subscribe({
            next: (data) => {
                this.devoirs = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching devoirs', err);
                this.loading = false;
            }
        });
    }

    deleteDevoir(id: number): void {
        if (confirm('Are you sure you want to delete this devoir?')) {
            this.devoirService.delete(id).subscribe({
                next: () => this.loadDevoirs(),
                error: (err) => console.error('Error deleting devoir', err)
            });
        }
    }
}
