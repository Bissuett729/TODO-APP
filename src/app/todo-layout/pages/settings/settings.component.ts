import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMaterialComponent } from './modals/add-material/add-material.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(public dialog: MatDialog) {}

  addMaterialModal() {
    const dialogRef = this.dialog.open(AddMaterialComponent);
    dialogRef.afterClosed();
  }

  setTheme(theme: string){
    const root = window.document.documentElement; 
    root.classList.remove(localStorage.getItem('themeAppTODO')!);
    localStorage.setItem('themeAppTODO', theme);
    root.classList.add(theme);
  }
}
