import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextareaModule,
    ButtonModule,
    OverlayPanelModule
  ],
  exports: [
    InputTextareaModule,
    ButtonModule,
    OverlayPanelModule
  ]
})
export class SharedModule { }
