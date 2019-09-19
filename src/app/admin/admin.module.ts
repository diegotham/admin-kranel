import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from 'src/app/material/app-material.module';

const routes: Routes = [
  { path: '', redirectTo: 'users' },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppMaterialModule,
    CommonModule
  ],
})
export class AdminModule { }
