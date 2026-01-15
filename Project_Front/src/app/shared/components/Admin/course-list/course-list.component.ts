import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../core/services/course.service';
import { CoursDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    courses: CoursDTO[] = [];
    loading = true;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.loadCourses();
    }

    loadCourses(): void {
        this.loading = true;
        this.courseService.getAll().subscribe({
            next: (data) => {
                this.courses = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching courses', err);
                this.loading = false;
            }
        });
    }

    deleteCourse(id: number): void {
        if (confirm('Are you sure you want to delete this course?')) {
            this.courseService.delete(id).subscribe({
                next: () => this.loadCourses(),
                error: (err) => console.error('Error deleting course', err)
            });
        }
    }
}
