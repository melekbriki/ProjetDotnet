import { Component } from '@angular/core';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.css']
})
export class SoumissionComponent {

  // Mock data (تنجم تبدّلهم بالـ backend بعد)
  users = [
    { id: 1, name: 'Ahmed Ben Ali' },
    { id: 2, name: 'Fatma Trabelsi' },
    { id: 3, name: 'Mohamed Salah' }
  ];

  devoirs = [
    { id: 1, titre: 'Devoir Angular' },
    { id: 2, titre: 'Devoir Spring Boot' },
    { id: 3, titre: 'Microservices Project' }
  ];

  selectedUserId: number | null = null;
  selectedDevoirId: number | null = null;
  selectedFile: File | null = null;

  message = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitSoumission() {
    if (!this.selectedUserId || !this.selectedDevoirId || !this.selectedFile) {
      this.message = '⚠️ Please fill all fields and select a file.';
      return;
    }

    // simulation submit
    this.message = '✅ Soumission envoyée avec succès!';
    console.log({
      userId: this.selectedUserId,
      devoirId: this.selectedDevoirId,
      file: this.selectedFile
    });
  }
}
