import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

import { AdminNavbarComponent } from './shared/components/Admin/admin-navbar/admin-navbar.component';
import { AdminLayoutComponent } from './shared/components/Admin/admin-layout/admin-layout.component';

import { StudentDashboardComponent } from './shared/components/Student/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './shared/components/Admin/admin-dashboard/admin-dashboard.component';
import { DevoirSubmissionComponent } from './shared/components/soumission/soumission.component';
import { CourseListComponent } from './shared/components/Admin/course-list/course-list.component';
import { DevoirListComponent } from './shared/components/Admin/devoir-list/devoir-list.component';
import { UserListComponent } from './shared/components/Admin/user-list/user-list.component';
import { AddCourseComponent } from './shared/components/Admin/add-course/add-course.component';
import { StudentCourseListComponent } from './shared/components/Student/course-list/student-course-list.component';
import { StudentCourseDetailComponent } from './shared/components/Student/course-detail/student-course-detail.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AdminLessonListComponent } from './shared/components/Admin/lesson-list/lesson-list.component';
import { AdminLessonFormComponent } from './shared/components/Admin/lesson-form/lesson-form.component';
import { DevoirFormComponent } from './shared/components/Admin/devoir-form/devoir-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,

    AdminNavbarComponent,
    AdminLayoutComponent,

    StudentDashboardComponent,
    AdminDashboardComponent,

    SidebarComponent,
    CourseListComponent,
    DevoirListComponent,
    UserListComponent,
    AddCourseComponent,
    StudentCourseListComponent,
    StudentCourseDetailComponent,
    DevoirSubmissionComponent,
    AdminLessonListComponent,
    AdminLessonFormComponent,
    DevoirFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,

    AdminNavbarComponent,
    AdminLayoutComponent,
    SidebarComponent,
    CourseListComponent,
    DevoirListComponent,
    UserListComponent,
    AddCourseComponent,
    StudentCourseListComponent,
    StudentCourseDetailComponent,
    DevoirSubmissionComponent,
    AdminLessonListComponent,
    AdminLessonFormComponent,
    DevoirFormComponent
  ]
})
export class SharedModule { }
