import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from 'src/app/admin/shared/layout/layout.component';
import { AppMaterialModule } from 'src/app/material/app-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AdminLayoutComponent,
    AppMaterialModule,
    HttpClientModule
  ]
})
export class AdminSharedModule { }
