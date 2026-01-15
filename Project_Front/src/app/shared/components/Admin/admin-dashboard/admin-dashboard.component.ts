import { Component, OnInit } from '@angular/core';
import { StatisticsService, DashboardStats } from '../../../../core/services/statistics.service';

interface StatCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  trend: string;
  loading: boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats: StatCard[] = [
    { title: 'Total Students', value: 0, icon: 'bi-people', color: 'primary', trend: '+12%', loading: true },
    { title: 'Total Courses', value: 0, icon: 'bi-book', color: 'success', trend: '+5%', loading: true },
    { title: 'Total Devoirs', value: 0, icon: 'bi-journal-text', color: 'warning', trend: '+8%', loading: true },
    { title: 'Active Lessons', value: 0, icon: 'bi-play-circle', color: 'info', trend: '+20%', loading: true }
  ];
  loading = true; // This 'loading' now refers to the overall dashboard loading, individual cards have their own 'loading'

  constructor(private statsService: StatisticsService) { }

  ngOnInit(): void {
    this.statsService.getDashboardStats().subscribe({
      next: (data: DashboardStats) => {
        this.stats[0].value = data.TotalUsers;
        this.stats[0].loading = false;

        this.stats[1].value = data.TotalCourses;
        this.stats[1].loading = false;

        this.stats[2].value = data.TotalDevoirs;
        this.stats[2].loading = false;

        this.stats[3].value = 24; // Mock for now
        this.stats[3].loading = false;

        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching stats', err);
        // Set all cards to not loading and overall dashboard to not loading on error
        this.stats.forEach(card => card.loading = false);
        this.loading = false;
      }
    });
  }
}
