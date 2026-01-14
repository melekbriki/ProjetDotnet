import { Component, OnInit } from '@angular/core';
import { DevoirService, Devoir } from '../../../services/devoir.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html'
})
export class StudentDashboardComponent implements OnInit {

  devoirs: Devoir[] = [];

  constructor(private devoirService: DevoirService) {}

  ngOnInit(): void {
    this.devoirService.getAll().subscribe({
      next: data => this.devoirs = data,
      error: err => console.error(err)
    });
  }
}
