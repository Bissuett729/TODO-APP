import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-todo',
  standalone: true,
  imports: [CommonModule ,MatDialogModule, ReactiveFormsModule],
  templateUrl: './add-new-todo.component.html',
  styleUrl: './add-new-todo.component.scss',
})
export class AddNewTodoComponent {

  addNewTodoForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required)
  });


  public getAllDataFromForm() {
    console.log('dataExample ------>', 
    {
      type: this.addNewTodoForm.get('type')?.value,
      title: this.addNewTodoForm.get('title')?.value,
      description: this.addNewTodoForm.get('description')?.value,
    });
    
  }
}
