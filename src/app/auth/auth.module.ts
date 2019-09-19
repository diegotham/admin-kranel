import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { AppMaterialModule } from 'src/app/material/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: 'login', component: LoginComponent  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class AuthModule { }
