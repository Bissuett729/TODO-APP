import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlert2Service {
  constructor() {}

  confirmMessage(
    title: string,
    text: string,
    icon: SweetAlertIcon,
    confirmButtonText: string
  ) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
    });
  }

  showMessage(
    title: string,
    text: string,
    icon: SweetAlertIcon,
  ) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
