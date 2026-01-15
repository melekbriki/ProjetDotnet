import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../core/services/course.service';
import { CoursDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-student-course-detail',
    templateUrl: './student-course-detail.component.html',
    styleUrls: ['./student-course-detail.component.css']
})
export class StudentCourseDetailComponent implements OnInit {
    course: CoursDTO | null = null;
    loading = true;

    constructor(
        private route: ActivatedRoute,
        private courseService: CourseService
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.courseService.getById(id).subscribe({
            next: (data) => {
                this.course = data;
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }
}
