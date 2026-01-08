import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

// ===== Student =====
import { StudentDashboardComponent } from './shared/components/Student/student-dashboard/student-dashboard.component';
import { SoumissionComponent } from './shared/components/soumission/soumission.component';

// ===== Admin =====
import { AdminLayoutComponent } from './shared/components/Admin/admin-layout/admin-layout.component';
import { DevoirComponent } from './shared/components/Admin/devoir/devoir.component';
import { AddUserComponent } from './shared/components/Admin/add-user/add-user.component';
// import { AddCoursComponent } from './shared/components/Admin/add-cours/add-cours.component';

const routes: Routes = [

  /* ================= STUDENT (Main Layout) ================= */
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'student',
        component: StudentDashboardComponent
      },
      {
        path: 'student/soumission',
        component: SoumissionComponent
      },
      {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
      }
    ]
  },

  /* ================= ADMIN (Admin Layout) ================= */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'devoirs',
        component: DevoirComponent
      },
      {
        path: 'users',
        component: AddUserComponent
      },
      {
        path: 'cours',
        component: AddUserComponent // بدّلها AddCoursComponent كي تعمل component خاص
      },
      {
        path: '',
        redirectTo: 'devoirs',
        pathMatch: 'full'
      }
    ]
  },

  /* ================= FALLBACK ================= */
  {
    path: '**',
    redirectTo: 'student'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
