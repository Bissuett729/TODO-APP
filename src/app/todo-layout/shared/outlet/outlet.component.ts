import { Component } from '@angular/core';
import { BoardComponent } from '../../pages/board/board.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [BoardComponent, DashboardComponent, SettingsComponent, RouterOutlet],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss',
})
export class OutletComponent {}
