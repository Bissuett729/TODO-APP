import { Component, OnInit, inject } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SweetAlert2Service } from '../services/sweet-alert2.service';
import { Router } from '@angular/router';
import { SignalsService } from '../services/signals.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule ,FormsModule, ReactiveFormsModule,],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  ngOnInit() {}
  public signalService = inject(SignalsService);
  public _user = toSignal(this.signalService.userData$);

  constructor(
    private requestSVC: RequestsService, 
    private _formBuilder: FormBuilder, 
    private sweetAlertSVC :SweetAlert2Service,
    private router: Router) {}

  signinFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  validateUser() {    
    this.requestSVC.methodGET(`/v1/todo-api/auth/validate_user/${this.signinFormGroup.get('username')?.value}/${this.signinFormGroup.get('password')?.value}`).subscribe((resp:any)=>{
      console.log(resp);
      if (resp.status === 302) {
        this.sweetAlertSVC.showMessage('Authorized user!', '' ,'success');
        this.router.navigateByUrl('/todo-app/dashboard');
        localStorage.setItem('idUser', resp.data._id);
        this.signalService.setUserData(resp.data);
      }
      if (resp.status === 404) {this.sweetAlertSVC.showMessage('User not found!', '' ,'error')}
      if (resp.status === 401) {this.sweetAlertSVC.showMessage('Password incorrect!', '' ,'warning')}
    });
  }
}
