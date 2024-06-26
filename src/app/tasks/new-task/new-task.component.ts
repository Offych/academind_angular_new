import { Component, EventEmitter, Output, inject, output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  fb = inject(FormBuilder);

  cancel = output<void>();

  addTaskForm = this.fb.group({
    title: [''],
    summary: [''],
    dueDate: [''],
  });

  onAddNewTask() {
    console.log('add new task handler', this.addTaskForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
