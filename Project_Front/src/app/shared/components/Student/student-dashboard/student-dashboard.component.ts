import { Component, OnInit } from '@angular/core';
import { DevoirService } from '../../../../core/services/devoir.service';
import { CourseService } from '../../../../core/services/course.service';
import { DevoirDTO, CoursDTO } from '../../../../core/models/api-models';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  devoirs: DevoirDTO[] = [];
  courses: CoursDTO[] = [];
  loading = true;
  userId: number | null = null;

  constructor(
    private devoirService: DevoirService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userId = user.userId;
    this.loadData();
  }

  loadData(): void {
    if (!this.userId) return;
    this.loading = true;

    // Fetch devoirs
    this.devoirService.getAll().subscribe({
      next: data => this.devoirs = data,
      error: err => console.error(err)
    });

    // Fetch all courses instead of inscriptions
    this.courseService.getAll().subscribe({
      next: data => {
        this.courses = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
