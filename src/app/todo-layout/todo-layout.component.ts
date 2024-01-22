import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OutletComponent } from './shared/outlet/outlet.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SignalsService } from '../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-todo-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, OutletComponent, SidebarComponent],
  templateUrl: './todo-layout.component.html',
  styleUrl: './todo-layout.component.scss',
})
export class TODOLAYOUTComponent implements OnInit {
  public SignalsSvc = inject(SignalsService);
  public _SidebarOpen = toSignal(this.SignalsSvc.openSidebar$);
  public loadUserData: boolean = false;

  constructor(private requestSVC: RequestsService) {}

  getUserData() {
    this.requestSVC.methodGET(`/v1/todo-api/owner/get_one_owner/${localStorage.getItem('idUser')}`).subscribe((resp:any)=>{
      this.SignalsSvc.setUserData(resp);
      this.loadUserData = true;
    })
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
