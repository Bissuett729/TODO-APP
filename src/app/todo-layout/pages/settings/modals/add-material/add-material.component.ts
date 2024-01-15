import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-material',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  templateUrl: './add-material.component.html',
  styleUrl: './add-material.component.scss',
})
export class AddMaterialComponent {
  materialInformationGroup = this._formBuilder.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    scanBy: ['', Validators.required],
    tpmIdToggle: [false],
    tpmId: ['', ''],
    description: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) {
    this.materialInformationGroup.get('tpmIdToggle')?.valueChanges.subscribe((value) => {
      const tpmIdControl = this.materialInformationGroup.get('tpmId');
      if (value) {
        tpmIdControl?.setValidators([Validators.required]);
      } else {
        tpmIdControl?.clearValidators();
      }
      tpmIdControl?.updateValueAndValidity();
    });
  }
}
