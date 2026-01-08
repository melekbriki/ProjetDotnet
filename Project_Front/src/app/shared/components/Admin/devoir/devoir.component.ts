import { Component, OnInit } from '@angular/core';
import { Devoir, DevoirService } from 'src/app/shared/services/devoir.service';

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
      error: () => this.message = '❌ Erreur chargement devoirs'
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
        this.loadDevoirs();
      },
      error: () => this.message = '❌ Erreur ajout devoir'
    });
  }

  deleteDevoir(id?: number) {
    if (!id) return;

    this.devoirService.delete(id).subscribe({
      next: () => this.loadDevoirs(),
      error: () => this.message = '❌ Erreur suppression devoir'
    });
  }
}
