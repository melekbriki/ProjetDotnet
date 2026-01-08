import { Component, OnInit } from '@angular/core';
import { Devoir, DevoirService } from '../../../services/devoir.service';

@Component({
  selector: 'app-devoir',
  templateUrl: './devoir.component.html',
  styleUrls: ['./devoir.component.css']
})
export class DevoirComponent implements OnInit {

  devoirs: Devoir[] = [];

  newDevoir: Devoir = {
    titre: '',
    description: '',
    dateLimite: ''
  };

  message = '';

  constructor(private devoirService: DevoirService) {}

  ngOnInit(): void {
    this.loadDevoirs();
  }

  loadDevoirs() {
    this.devoirService.getAll().subscribe({
      next: (data) => this.devoirs = data,
      error: () => this.message = '❌ Error loading devoirs'
    });
  }

  addDevoir() {
    if (!this.newDevoir.titre || !this.newDevoir.dateLimite) {
      this.message = '⚠️ Titre et date limite obligatoires';
      return;
    }

    this.devoirService.add(this.newDevoir).subscribe({
      next: () => {
        this.message = '✅ Devoir ajouté avec succès';
        this.newDevoir = { titre: '', description: '', dateLimite: '' };
        this.loadDevoirs(); // refresh list
      },
      error: () => this.message = '❌ Error adding devoir'
    });
  }

  deleteDevoir(id?: number) {
    if (!id) return;

    this.devoirService.delete(id).subscribe({
      next: () => this.loadDevoirs(),
      error: () => this.message = '❌ Error deleting devoir'
    });
  }
}
