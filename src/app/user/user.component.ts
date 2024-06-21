import { Component, signal, computed } from '@angular/core';

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
  selectedUser = signal(MOCK_USERS[randomIndex]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  /*   get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  } */

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
    this.selectedUser.set(MOCK_USERS[randomIndex]);
  }
}
