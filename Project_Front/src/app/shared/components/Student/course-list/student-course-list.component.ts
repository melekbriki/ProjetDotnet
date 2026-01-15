import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../core/services/course.service';
import { CoursDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-student-course-list',
    templateUrl: './student-course-list.component.html',
    styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {
    courses: CoursDTO[] = [];
    loading = true;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        this.loading = true;
        this.courseService.getAll().subscribe({
            next: (courses) => {
                this.courses = courses;
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }
}
