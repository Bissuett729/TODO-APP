import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SignalsService } from '../../../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RequestsService } from '../../../services/requests.service';
import { SweetAlert2Service } from '../../../services/sweet-alert2.service';

@Component({
  selector: 'app-add-new-todo',
  standalone: true,
  imports: [CommonModule ,MatDialogModule, ReactiveFormsModule],
  templateUrl: './add-new-todo.component.html',
  styleUrl: './add-new-todo.component.scss',
})
export class AddNewTodoComponent {

  public SignalService = inject(SignalsService);
  public _user = toSignal(this.SignalService.userData$);

  constructor(private requestSvc: RequestsService, private sweetAlertSVC: SweetAlert2Service) {}

  addNewTodoForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required)
  });


  public getAllDataFromForm() {
    const data =
    {
      title: this.addNewTodoForm.get('title')?.value,
      description: this.addNewTodoForm.get('description')?.value,
      status: 'todo',
      type: this.addNewTodoForm.get('type')?.value,
      userOwner: this._user()._id,
      active: true
    };

    this.sweetAlertSVC.confirmMessage('Are you sure to create new task?', '', 'success', 'Yes').then((resp)=> {
      if (resp.isConfirmed) {
        this.requestSvc.methodPOST('/v1/todo-api/tasks/create_task', data).subscribe((resp:any)=>{
          this.sweetAlertSVC.showMessage('Task was created succesfully', '', 'success');
          this.addNewTodoForm.reset();
        }, (error)=>{
          this.sweetAlertSVC.showMessage('Error', error.error, 'warning');
        });
      }
    })

  }
}
