import { Component } from '@angular/core';

import { MOCK_USERS } from '../data/users';

const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = MOCK_USERS[randomIndex];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('Clicked!');
  }
}
