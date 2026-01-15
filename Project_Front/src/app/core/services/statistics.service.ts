import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { DevoirService } from './devoir.service';

export interface DashboardStats {
    TotalUsers: number;
    TotalCourses: number;
    TotalDevoirs: number;
}

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    constructor(
        private userService: UserService,
        private courseService: CourseService,
        private devoirService: DevoirService
    ) { }

    getDashboardStats(): Observable<DashboardStats> {
        return forkJoin({
            users: this.userService.getAll(),
            courses: this.courseService.getAll(),
            devoirs: this.devoirService.getAll()
        }).pipe(
            map(data => ({
                TotalUsers: data.users.length,
                TotalCourses: data.courses.length,
                TotalDevoirs: data.devoirs.length
            }))
        );
    }
}
