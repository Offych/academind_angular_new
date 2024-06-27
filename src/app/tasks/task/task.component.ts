import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';

import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //task = input.required<Task>();
  //complete = output<string>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
