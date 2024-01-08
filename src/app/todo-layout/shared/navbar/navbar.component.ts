import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SignalsService } from '../../../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public SignalsSvc = inject(SignalsService);
  public _SidebarOpen = toSignal(this.SignalsSvc.openSidebar$);

  changeModeSidebar() {
    this.SignalsSvc.setOpenSidebar(!this._SidebarOpen());
  }
}
