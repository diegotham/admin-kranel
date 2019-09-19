import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/admin/post/services/post.service';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class PostItemDialogComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    public dialog: MatDialogRef<PostItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private postService: PostService
    ) {}

  ngOnInit() {
    this.post$ = this.postService.getPost(this.data.id);
  }

  close() {
    this.dialog.close();
  }
}
