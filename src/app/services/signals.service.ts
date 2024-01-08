import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  public openSidebar = signal<boolean>(false);
  public openSidebar$ = toObservable(this.openSidebar);

  public setOpenSidebar(statusSidebar: boolean) {
    this.openSidebar.set(statusSidebar);
  }
}
