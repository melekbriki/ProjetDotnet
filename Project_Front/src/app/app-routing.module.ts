import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

// Admin Components
import { AdminDashboardComponent } from './shared/components/Admin/admin-dashboard/admin-dashboard.component';
import { CourseListComponent } from './shared/components/Admin/course-list/course-list.component';
import { AddCourseComponent } from './shared/components/Admin/add-course/add-course.component';
import { DevoirListComponent } from './shared/components/Admin/devoir-list/devoir-list.component';
import { UserListComponent } from './shared/components/Admin/user-list/user-list.component';
import { AdminLessonListComponent } from './shared/components/Admin/lesson-list/lesson-list.component';
import { AdminLessonFormComponent } from './shared/components/Admin/lesson-form/lesson-form.component';
import { DevoirFormComponent } from './shared/components/Admin/devoir-form/devoir-form.component';
import { AddUserComponent } from './shared/components/Admin/add-user/add-user.component';

// Student Components
import { StudentDashboardComponent } from './shared/components/Student/student-dashboard/student-dashboard.component';
import { StudentCourseListComponent } from './shared/components/Student/course-list/student-course-list.component';
import { StudentCourseDetailComponent } from './shared/components/Student/course-detail/student-course-detail.component';
import { DevoirSubmissionComponent } from './shared/components/soumission/soumission.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },

      // Admin Routes
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: { roles: [3] },
        children: [
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'courses', component: CourseListComponent },
          { path: 'courses/add', component: AddCourseComponent },
          { path: 'courses/edit/:id', component: AddCourseComponent },
          { path: 'courses/:id/lessons', component: AdminLessonListComponent },
          { path: 'courses/:id/lessons/add', component: AdminLessonFormComponent },
          { path: 'courses/:id/lessons/edit/:lessonId', component: AdminLessonFormComponent },
          { path: 'devoirs', component: DevoirListComponent },
          { path: 'devoirs/add', component: DevoirFormComponent },
          { path: 'devoirs/edit/:id', component: DevoirFormComponent },
          { path: 'users', component: UserListComponent },
          { path: 'users/add', component: AddUserComponent }

        ]
      },

      // Student Routes
      {
        path: 'student',
        canActivate: [RoleGuard],
        data: { roles: [1, 2] },
        children: [
          { path: 'dashboard', component: StudentDashboardComponent },
          { path: 'courses', component: StudentCourseListComponent },
          { path: 'course/:id', component: StudentCourseDetailComponent },
          { path: 'devoir/:id', component: DevoirSubmissionComponent }
        ]
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
