import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;

  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";
  private tasksService = inject(TasksService);

  cancelAddingTask() {
    this.close.emit();
  }

  createTask() {
    this.tasksService.addUserTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
     }, this.userId);
     this.close.emit();
  }
}
