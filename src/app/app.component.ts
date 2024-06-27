import { Component } from '@angular/core';

import { MOCK_USERS } from './data/users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
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
