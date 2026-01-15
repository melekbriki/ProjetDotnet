import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../../core/services/course.service';
import { CoursDTO, User } from '../../../../core/models/api-models';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: CoursDTO = { id: 0, titre: '', description: '', enseignantId: 0 };
  teachers: User[] = [];
  isEdit = false;
  loading = false;

  constructor(
    private courseService: CourseService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.courseService.getById(id).subscribe(data => this.course = data);
    }
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.userService.getAll().subscribe(users => {
      // Filter for teachers if possible, or just list all for now
      this.teachers = users;
    });
  }

  onSubmit(): void {
    this.loading = true;
    const observer = {
      next: () => {
        this.loading = false;
        this.router.navigate(['/admin/courses']);
      },
      error: (err: any) => {
        console.error('Error saving course', err);
        this.loading = false;
      }
    };

    if (this.isEdit) {
      this.courseService.update(this.course.id, this.course).subscribe(observer);
    } else {
      this.courseService.add(this.course).subscribe(observer);
    }
  }
}
