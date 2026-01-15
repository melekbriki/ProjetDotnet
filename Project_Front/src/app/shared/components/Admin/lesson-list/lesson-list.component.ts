import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';
import { CourseService } from '../../../../core/services/course.service';
import { LeconDTO, CoursDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-admin-lesson-list',
    templateUrl: './lesson-list.component.html',
    styleUrls: ['./lesson-list.component.css']
})
export class AdminLessonListComponent implements OnInit {
    lessons: LeconDTO[] = [];
    course: CoursDTO | undefined;
    courseId!: number;
    loading = true;

    constructor(
        private lessonService: LessonService,
        private courseService: CourseService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
        this.loadData();
    }

    loadData(): void {
        this.loading = true;

        // Load course details
        this.courseService.getById(this.courseId).subscribe(c => this.course = c);

        // Load lessons
        this.lessonService.getByCourseId(this.courseId).subscribe({
            next: (data) => {
                this.lessons = data;
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }

    deleteLesson(id: number): void {
        if (confirm('Delete this lesson?')) {
            this.lessonService.delete(id).subscribe(() => this.loadData());
        }
    }
}
