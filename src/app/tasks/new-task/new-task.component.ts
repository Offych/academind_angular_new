import { Component, output, inject, Input } from '@angular/core';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  /*   enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal(''); */

  private tasksService = inject(TasksService);

  close = output<void>();
  //add = output<NewTaskData>();

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
