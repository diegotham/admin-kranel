import { NgModule } from '@angular/core';

import {
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatIconModule,
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
    MatIconModule,
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
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class AppMaterialModule {}
