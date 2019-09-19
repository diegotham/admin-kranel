import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AdminSharedModule } from 'src/app/admin/shared/shared.module';
import { PostListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { PostItemDialogComponent } from './item-dialog/item-dialog.component';

const routes: Routes = [
  {path: '', component: PostComponent}
];

@NgModule({
  declarations: [PostComponent, PostListComponent, PostItemDialogComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [PostItemDialogComponent]
})
export class PostModule { }
