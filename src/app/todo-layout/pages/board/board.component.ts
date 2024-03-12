import { Component, OnInit, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNewTodoComponent } from '../../modals/add-new-todo/add-new-todo.component';
import { CommonModule } from '@angular/common';
import { UpdateTodoComponent } from '../../modals/update-todo/update-todo.component';
import { OptionTasksComponent } from '../../components/option-tasks/option-tasks.component';
import { TaskComponent } from '../../components/task/task.component';
import { RequestsService } from '../../../services/requests.service';
import { SignalsService } from '../../../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule ,MatMenuModule, MatDialogModule, OptionTasksComponent, TaskComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  public descriptionExample: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cumque labore. Minus nihil est et aut magnam nostrum harum sint reprehenderit! Illo expedita dicta ipsa, fuga numquam quos accusantium nesciunt!';
  public titleExample: string = 'Lorem ipsum dolor';

  public todoViewMode: number = 0;
  public progressViewMode: number = 0;
  public doneViewMode: number = 0;

  public signalService = inject(SignalsService);
  public _user = toSignal(this.signalService.userData$);

  public todoData: any = [];
  public progressData: any = [];
  public doneData: any = [];


  constructor(public dialog: MatDialog, private RequestSRC: RequestsService) {}
  
  public openUpdateTodoModal(data: any) {
    const dialogRef = this.dialog.open(UpdateTodoComponent, {
      closeOnNavigation: true,
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed();
  }

  public setModeTodo(mode: number) {
    this.todoViewMode = mode;
  }
  public setModeprogress(mode: number) {
    this.progressViewMode = mode;
  }
  public setModedone(mode: number) {
    this.doneViewMode = mode;
  }
  getAllTickets() {
    this.RequestSRC.methodGET('/v1/todo-api/tasks/get_all_tasks').subscribe((resp:any)=>{
      console.log('Get all task ===>',resp); 

      const respData = resp;

      this.todoData = respData.filter((task:any)=> task.status === 'todo');
      this.progressData = respData.filter((task:any)=> task.status === 'progress');
      this.doneData = respData.filter((task:any)=> task.status === 'done');

      console.log('this.todoData', this.todoData);
      console.log('this.progressData', this.progressData);
      console.log('this.doneData', this.doneData);
    })
  }

  ngOnInit(): void { 
    this.getAllTickets();
  }
}
