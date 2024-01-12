import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { AddNewTodoComponent } from '../../modals/add-new-todo/add-new-todo.component';

@Component({
  selector: 'app-option-tasks',
  standalone: true,
  imports: [CommonModule, MatMenuModule],
  templateUrl: './option-tasks.component.html',
  styleUrl: './option-tasks.component.scss',
})
export class OptionTasksComponent {
  @Input() title: string = '';
  @Output() menuClick = new EventEmitter<number>();
  @Input() showButtonAdd: boolean = false;
  dialog: any;

  handleMenuClick(mode: number): void {
    this.menuClick.emit(mode);
  }

  public openAddNewTodoModal() {
    const dialogRef = this.dialog.open(AddNewTodoComponent, {
      closeOnNavigation: true,
      disableClose: true,
    });
    dialogRef.afterClosed();
  }
}