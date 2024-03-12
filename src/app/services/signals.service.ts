import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  public openSidebar = signal<boolean>(false);
  public openSidebar$ = toObservable(this.openSidebar);
  public ThemeMode = signal<string>('light');
  public ThemeMode$ = toObservable(this.ThemeMode);
  public userData = signal<any>([]);
  public userData$ = toObservable(this.userData);
  currentIp = signal('' + document.location.protocol + '//' + document.location.hostname + ':');
  currentIp$ = toObservable(this.currentIp);

  public setOpenSidebar(statusSidebar: boolean) {
    this.openSidebar.set(statusSidebar);
  }
  public setUserData(userData: any) {
    this.userData.set(userData);
  }

  setThemeMode(mode: string) {
    this.ThemeMode.set(mode);
  }
}
