import { Component } from '@angular/core';
import { DevoirService, Devoir } from '../../../services/devoir.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {

  newDevoir: Devoir = {
    titre: '',
    description: '',
    dateDevoir: ''
  };

  message = '';

  constructor(private devoirService: DevoirService) {}

  addDevoir() {
    this.devoirService.add(this.newDevoir).subscribe({
      next: () => {
        this.message = '✅ Devoir added successfully';
        this.newDevoir = { titre: '', description: '', dateDevoir: '' };
      },
      error: err => {
        this.message = '❌ Error: ' + err.message;
      }
    });
  }
}
