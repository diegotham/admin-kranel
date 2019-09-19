import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { PostItemDialogComponent } from 'src/app/admin/post/item-dialog/item-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<Post>();
  displayedColumns: string[] = ['id', 'title', 'username'];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.posts) {
      this.dataSource.data = this.posts;
      this.dataSource.sort = this.sort;
    }
  }

  filterData(q: string) {
    this.dataSource.filter = q.trim().toLocaleLowerCase();
  }

  openPost(post: Post) {
    this.dialog.open(PostItemDialogComponent, {
      maxWidth: 'none',
      data: post
    });
  }
}
