import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

// Student
import { StudentDashboardComponent } from './shared/components/Student/student-dashboard/student-dashboard.component';
import { SoumissionComponent } from './shared/components/soumission/soumission.component';

// Admin
import { AdminLayoutComponent } from './shared/components/Admin/admin-layout/admin-layout.component';
import { DevoirComponent } from './shared/components/Admin/devoir/devoir.component';
import { AddUserComponent } from './shared/components/Admin/add-user/add-user.component';


const routes: Routes = [

  /* ================= MAIN LAYOUT ================= */
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      /* -------- STUDENT -------- */
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

  /* ================= ADMIN ================= */
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
        component: AddUserComponent
      },
      {
        path: '',
        redirectTo: 'devoirs',
        pathMatch: 'full'
      }
    ]
  },

  /* ================= NOT FOUND ================= */
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
