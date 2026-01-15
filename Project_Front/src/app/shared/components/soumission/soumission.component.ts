import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevoirService } from '../../../core/services/devoir.service';
import { DevoirDTO, Soumission } from '../../../core/models/api-models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.css']
})
export class DevoirSubmissionComponent implements OnInit {
  devoirId: number = 0;
  devoir: DevoirDTO | null = null;
  loading = true;
  submitting = false;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private devoirService: DevoirService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.devoirId = +this.route.snapshot.params['id'];
    this.devoirService.getById(this.devoirId).subscribe({
      next: (data) => {
        this.devoir = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  submitDevoir(): void {
    this.submitting = true;
    const soumission = {
      DateSoumission: new Date().toISOString(),
      Note: 0,
      UserId: JSON.parse(localStorage.getItem('currentUser') || '{}').userId,
      DevoirId: this.devoirId
    };

    this.http.post(`${environment.apiUrl}/soumissions`, soumission).subscribe({
      next: () => {
        this.submitting = false;
        this.success = true;
        setTimeout(() => this.router.navigate(['/student/dashboard']), 2000);
      },
      error: (err) => {
        console.error('Error submitting devoir', err);
        this.submitting = false;
      }
    });
  }
}
