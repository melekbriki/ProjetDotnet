import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    role$: Observable<number> | undefined;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.role$ = this.authService.getRole();
    }
}
