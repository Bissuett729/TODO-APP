import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss',
})
export class UpdateTodoComponent implements OnInit {
  updateTodoForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    getStatusTodo() {
      console.log("updateTodoForm.get('status')?.value =====>", this.updateTodoForm.get('status')?.value);
    }

  ngOnInit(): void {
    console.log('data ------->', this.data);
  }
}
