import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

import { AdminNavbarComponent } from './shared/components/Admin/admin-navbar/admin-navbar.component';
import { AdminLayoutComponent } from './shared/components/Admin/admin-layout/admin-layout.component';

import { StudentDashboardComponent } from './shared/components/Student/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './shared/components/Admin/admin-dashboard/admin-dashboard.component';
import { SoumissionComponent } from './shared/components/soumission/soumission.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,

    AdminNavbarComponent,
    AdminLayoutComponent,

    StudentDashboardComponent,
    AdminDashboardComponent,
   
    SoumissionComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule   // 🔥 مهم برشا (ngModel)
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,

    AdminNavbarComponent,
    AdminLayoutComponent
  ]
})
export class SharedModule {}
