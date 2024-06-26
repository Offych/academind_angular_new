import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  /*   enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal(''); */

  cancel = output<void>();

  onAddNewTask() {}

  onCancel() {
    this.cancel.emit();
  }
}
