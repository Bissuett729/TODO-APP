import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalsService } from '../../../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public SignalsSvc = inject(SignalsService);
  public _SidebarOpen = toSignal(this.SignalsSvc.openSidebar$);
  
  public menus: menu[] = [
    { icon: 'ri-dashboard-line', menu: 'Dashboard', link: 'dashboard' },
    { icon: 'ri-layout-3-line', menu: 'Board', link: 'board' },
    { icon: 'ri-settings-3-line', menu: 'Settings', link: 'settings' },
  ];

  public closeSidebar() {
    this.SignalsSvc.setOpenSidebar(false);
  }
}

export type menu = {
    icon: string,
    menu: string,
    link: string
}
