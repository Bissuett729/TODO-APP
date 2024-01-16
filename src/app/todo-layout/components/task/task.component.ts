import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatDialogModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() typeTask!: string;
  @Input() viewMode!: number;
}
