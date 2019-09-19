import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from 'src/app/admin/user/list/list.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { UserItemDialogComponent } from './item-dialog/item-dialog.component';

const routes: Routes = [
  {path: '', component: UserComponent}
];
@NgModule({
  declarations: [UserComponent, UserListComponent, UserItemDialogComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [UserItemDialogComponent]
})
export class UserModule { }
