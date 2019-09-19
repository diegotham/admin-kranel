import { NgModule } from '@angular/core';

import {
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class AppMaterialModule {}
