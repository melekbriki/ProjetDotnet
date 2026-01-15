import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../../../core/services/lesson.service';
import { LeconDTO } from '../../../../core/models/api-models';

@Component({
    selector: 'app-admin-lesson-form',
    templateUrl: './lesson-form.component.html',
    styleUrls: ['./lesson-form.component.css']
})
export class AdminLessonFormComponent implements OnInit {
    lessonForm!: FormGroup;
    courseId!: number;
    lessonId: number | null = null;
    loading = false;
    isEdit = false;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private lessonService: LessonService
    ) { }

    ngOnInit(): void {
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
        this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
        this.isEdit = !!this.lessonId;

        this.lessonForm = this.fb.group({
            titre: ['', [Validators.required, Validators.minLength(3)]],
            contenu: ['', Validators.required],
            coursId: [this.courseId],
            userId: [1] // Temporary, should come from AuthService
        });

        if (this.isEdit && this.lessonId) {
            this.loadLesson();
        }
    }

    loadLesson(): void {
        this.loading = true;
        this.lessonService.getById(this.lessonId!).subscribe({
            next: (lesson) => {
                this.lessonForm.patchValue(lesson);
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }

    onSubmit(): void {
        if (this.lessonForm.invalid) return;

        this.loading = true;
        const lessonData: LeconDTO = {
            ...this.lessonForm.value,
            id: this.lessonId || 0,
            coursId: this.courseId // Ensure coursId is correct
        };

        const request = this.isEdit
            ? this.lessonService.update(this.lessonId!, lessonData)
            : this.lessonService.add(lessonData);

        request.subscribe({
            next: () => {
                this.loading = false;
                this.router.navigate(['/admin/courses', this.courseId, 'lessons']);
            },
            error: (err) => {
                console.error('Error saving lesson', err);
                this.loading = false;
            }
        });
    }
}
