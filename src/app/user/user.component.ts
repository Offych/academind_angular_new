import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import { User } from './user.model';

//import { MOCK_USERS } from '../data/users';

//const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
/* type User = {
  id: string;
  name: string;
  avatar: string;
}; */

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /*   @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; */
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();

  //avatar = input.required<string>();
  //name = input.required<string>();
  //imagePath = computed(() => `assets/users/${this.avatar()}`);

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  //selectedUser = signal(MOCK_USERS[randomIndex]);
  //imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  /*   get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  } */

  onSelectUser() {
    /* const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
    this.selectedUser.set(MOCK_USERS[randomIndex]); */

    this.select.emit(this.user.id);
  }
}
