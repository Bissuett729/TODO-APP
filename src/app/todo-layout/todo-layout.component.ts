import { Component, inject } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OutletComponent } from './shared/outlet/outlet.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SignalsService } from '../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, OutletComponent, SidebarComponent],
  templateUrl: './todo-layout.component.html',
  styleUrl: './todo-layout.component.scss',
})
export class TODOLAYOUTComponent {
  public SignalsSvc = inject(SignalsService);
  public _SidebarOpen = toSignal(this.SignalsSvc.openSidebar$);
}
