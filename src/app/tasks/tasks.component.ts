import { Component, Input, inject } from '@angular/core';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  taskService = inject(TasksService);

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  /*   onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  } */

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  /*   onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  } */
}
