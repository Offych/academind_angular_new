import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { MOCK_USERS } from '../data/users';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class LayoutComponent {
  users = MOCK_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    //console.log(id);
    this.selectedUserId = id;
  }
}
