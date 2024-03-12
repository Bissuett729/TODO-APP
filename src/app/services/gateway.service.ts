import { Injectable, inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SignalsService } from './signals.service';
import { toSignal } from '@angular/core/rxjs-interop';


  //! Iss Socket //
  @Injectable()
  export class EventsGateway extends Socket {
    signalSrvc = inject(SignalsService);
    _currentIp = toSignal(this.signalSrvc.currentIp$);
    constructor() {
      super({ url: 'http://localhost:4200'})
    }
  };

  @Injectable({
    providedIn: 'root'
  })
  export class WebSocketService {

    public socketEventsStatus!: boolean;

    constructor(
      public readonly socketEvents: EventsGateway,

    ) {
      console.log('web socket service');
      this.handleSocketConn('Socket gateway');
    };

    public handleSocketConn(where: string): void {
      this.socketEvents.on('connect', () => console.log('Connected to ' + where));
      this.socketEvents.on('disconnect', () => console.log('Disconnected from ' + where));
    };

    public emit(event: string, payload?: any, callback?: Function): void {
      this.socketEvents.emit(event, payload, callback);
    };

    public listen(event: string): any {
      return this.socketEvents.fromEvent(event);
    };
  }