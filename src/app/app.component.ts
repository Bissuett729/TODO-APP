import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignalsService } from './services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public SignalsSvc = inject(SignalsService);
  public _ModeTheme = toSignal(this.SignalsSvc.ThemeMode$);

  constructor(private signalsSVC: SignalsService, private requestSVC: RequestsService) {}

  ngOnInit(): void {
    const root = window.document.documentElement;
    root.classList.remove();
    root.classList.add(localStorage.getItem('themeAppTODO') || 'dark-theme');
  }
}
