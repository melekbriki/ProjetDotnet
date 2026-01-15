import { Component, OnInit } from '@angular/core';
import { DevoirDTO } from '../../../../core/models/api-models';
import { DevoirService } from '../../../../core/services/devoir.service';

@Component({
  selector: 'app-devoir',
  templateUrl: './devoir.component.html',
  styleUrls: ['./devoir.component.css']
})
export class DevoirComponent implements OnInit {

  devoirs: DevoirDTO[] = [];

  newDevoir: DevoirDTO = {
    id: 0,
    titre: '',
    description: '',
    dateDevoir: ''
  };

  message = '';
  loading = false;

  constructor(private devoirService: DevoirService) { }

  ngOnInit(): void {
    this.loadDevoirs();
  }

  loadDevoirs() {
    this.loading = true;
    this.devoirService.getAll().subscribe({
      next: (data) => {
        this.devoirs = data;
        this.loading = false;
      },
      error: () => {
        this.message = '❌ Error loading devoirs';
        this.loading = false;
      }
    });
  }

  addDevoir() {
    if (!this.newDevoir.titre || !this.newDevoir.dateDevoir) {
      this.message = '⚠️ Title and date are required';
      return;
    }

    this.loading = true;
    const devoirToSend = {
      ...this.newDevoir,
      dateDevoir: new Date(this.newDevoir.dateDevoir).toISOString()
    };

    // Remove id for new devoir
    const { id, ...cleanDevoir } = devoirToSend;

    this.devoirService.add(cleanDevoir as DevoirDTO).subscribe({
      next: () => {
        this.message = '✅ Assignment added successfully';
        this.newDevoir = { id: 0, titre: '', description: '', dateDevoir: '' };
        this.loadDevoirs();
      },
      error: () => {
        this.message = '❌ Error adding assignment';
        this.loading = false;
      }
    });
  }

  deleteDevoir(id?: number) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this assignment?')) {
      this.devoirService.delete(id).subscribe({
        next: () => this.loadDevoirs(),
        error: () => this.message = '❌ Error deleting assignment'
      });
    }
  }
}
