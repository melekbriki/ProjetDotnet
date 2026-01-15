import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { User, Role } from '../../../../core/models/api-models';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    loading = true;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.loading = true;
        this.userService.getAll().subscribe({
            next: (data) => {
                this.users = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error fetching users', err);
                this.loading = false;
            }
        });
    }

    deleteUser(id: number): void {
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.delete(id).subscribe({
                next: () => this.loadUsers(),
                error: (err) => console.error('Error deleting user', err)
            });
        }
    }

    changeRole(id: number, newRoleId: number): void {
        const confirmMsg = `Are you sure you want to change this user's role?`;

        if (confirm(confirmMsg)) {
            this.userService.getById(id).subscribe(user => {
                const updatedUser = { ...user, RoleId: newRoleId };
                this.userService.update(id, updatedUser).subscribe({
                    next: () => this.loadUsers(),
                    error: (err) => console.error('Error updating role', err)
                });
            });
        }
    }

    getRoleName(roleId: number): string {
        return roleId === 3 ? 'ADMIN' : 'STUDENT';
    }
}
